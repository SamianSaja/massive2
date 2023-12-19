import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express()

import listArticle from './routes/listArticle.js';
import tips from './routes/tips.js';
import inspiration from './routes/inspiration.js';
import healtyRecept from './routes/healtyRecept.js';
import user from './routes/user.js';
import diet from './routes/diet.js';

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json()); 

app.use('/assets', express.static('assets'));

app.use(user)
app.use(listArticle)
app.use(tips)
app.use(inspiration)
app.use(healtyRecept)
app.use(diet)

app.listen(5000, () => {
    console.log('server berjalan di port 5000')
})

