import model from '../models/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const controller = {}

controller.getUsers = async(req, res) => {
    try {
        let response = await model.user.findAll({
            attributes: ['id', 'name', 'email']
        })
        if (response.length > 0) {
            res.status(200).json({
                message: 'User finded',
                data: response
            })
        }else {
            res.status(200).json({
                message: 'not data entry',
                data: []
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

controller.register = async(req, res) => {
    const { name, email, password, confPassword, noHp, img, } = req.body
    if(password !== confPassword) return res.status(400).json({msg: "Passwod dan confirm password tidak cocok"})
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await model.user.create({
            name: name,
            email: email,
            password: hashPassword,
            noHp: noHp,
            img: img
        })
        res.json({msg: "Register Berhasil"})
    } catch (error) {
        console.log(error)
    }
}

controller.login = async(req, res) => {
    try {
        const user = await model.user.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(400).json({msg: "wrong password"})
        const userId = user[0].id
        const name = user[0].name
        const email = user[0].email
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        })
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })
        await model.user.update({refreshToken: refreshToken}, {
            where: {
                id: userId
            }
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.json({ accessToken });

    } catch (error) {
        res.status(404).json({msg: "email tidak ditemukan"})
    }
}

controller.logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await model.user.findAll({
            where: {
                refreshToken: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const userId = user[0].id;
        await model.user.update({refreshToken: null}, {
            where: {
                id: userId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
}

export default controller