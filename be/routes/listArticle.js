import express from 'express';
import controller from './../controllers/index.js';
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/artikel/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

const router = express.Router();


router.get('/articles', controller.listArticle.getArticles)
router.get('/articles/:uuid', controller.listArticle.searchArticle)
router.post('/articles', upload.single('img'), controller.listArticle.createArticle)
router.put('/articles/:uuid', upload.single('img'), controller.listArticle.updateArticle)
router.delete('/articles/:uuid', controller.listArticle.deleteArticle)



export default router;  