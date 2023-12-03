import express from 'express'
import controller from './../controllers/index.js'
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/tips/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

const router = express.Router()

router.get('/tips', controller.tips.getTips)
router.get('/tips/:uuid', controller.tips.searchTips)
router.post('/tips', upload.single('img'), controller.tips.createTips)
router.put('/tips/:uuid', upload.single('img'), controller.tips.updateTips)
router.delete('/tips/:uuid', controller.tips.deleteTips)

export default router;  