import db from '../config/db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import util from 'util';
const queryAsync = util.promisify(db.query).bind(db);
const controller = {}

controller.getUsers = async(req, res) => {
    // await queryAsync('SELECT id, name, email FROM users');
    
    try {
        let response = await queryAsync('SELECT id, name, email, username, phone_number, img FROM users');
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

// import model from '../models/index.js'


// const controller = {}

// controller.getUsers = async(req, res) => {
//     try {
//         let response = await model.user.findAll({
//             attributes: ['id', 'name', 'email']
//         })
//         if (response.length > 0) {
//             res.status(200).json({
//                 message: 'User finded',
//                 data: response
//             })
//         }else {
//             res.status(200).json({
//                 message: 'not data entry',
//                 data: []
//             })
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// }

controller.register = async(req, res) => {
    const { name, email, password, confPassword, phone_number, img, username } = req.body
    if(password !== confPassword) return res.status(400).json({msg: "Passwod dan confirm password tidak cocok"})
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    
    db.query(`INSERT INTO users (name, email, password, phone_number, img, createdAt, updatedAt, username) VALUES (?, ?, ?, ?, ?, NOW(), NOW(), ?)`, [name, email, hashPassword, phone_number, img, username], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
}

controller.login = async (req, res) => {
    try {
        const [user] = await queryAsync('SELECT * FROM users WHERE phone_number = ?', [req.body.phone_number]);

        if (!user || user.length === 0) {
            return res.status(404).json({ msg: 'Phone Number not found' });
        }

        if (!user || !user.password) {
            return res.status(400).json({ msg: 'Invalid user or password not set' });
        }

        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) {
            return res.status(400).json({ msg: 'Wrong password' });
        }

        const userId = user.id;
        const name = user.name;
        const phone_number = user.phone_number;
        const username = user.username;
        const email = user.email;
        const img = user.img;

        const accessToken = jwt.sign({ userId, name, phone_number, username, email, img }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });

        const refreshToken = jwt.sign({ userId, name, phone_number, username, email, img }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await queryAsync('UPDATE users SET refreshToken = ? WHERE id = ?', [refreshToken, userId]);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({ accessToken });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

controller.logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const [user] = await queryAsync('SELECT * FROM users WHERE refreshToken = ?', [refreshToken]);

        // const user = await model.user.findAll({
        //     where: {
        //         refreshToken: refreshToken
        //     }
        // });
        if(!user) return res.sendStatus(204);
        const userId = user.id;
        await queryAsync(`UPDATE users SET refreshToken = NULL WHERE id = ?`, [userId], (err) => {
            if (err) throw err;
            res.json({ message: 'logouted' });
     
        });
        // await model.user.update({refreshToken: null}, {
        //     where: {
        //         id: userId
        //     }
        // });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
}

export default controller