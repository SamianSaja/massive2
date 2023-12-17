import db from '../config/db.js';
import jwt from 'jsonwebtoken';
import util from 'util';
const queryAsync = util.promisify(db.query).bind(db);

const controller = {}

controller.refToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const [user] = await queryAsync('SELECT * FROM users WHERE refreshToken = ?', [refreshToken]);
        // const user = await model.user.findAll({
        //     where: {
        //         refreshToken: refreshToken
        //     }
        // });
        if(!user) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user.id;
            const name = user.name;
            const phone_number = user.phone_number;
            const username = user.username;
            const email = user.email;
            const img = user.img;
            const accessToken = jwt.sign({userId, name, phone_number, username, email, img}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
        
    } catch (error) {
        console.log(error);
    }
}

export default controller