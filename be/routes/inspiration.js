import express from 'express'
import controller from './../controllers/index.js'
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/inspirasi/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

const router = express.Router()

router.get('/ins', controller.inspiration.getIns)
router.get('/ins/:uuid', controller.inspiration.searchIns)
router.post('/ins', upload.single('img'), controller.inspiration.createIns)
router.put('/ins/:uuid', upload.single('img'),controller.inspiration.updateIns)
router.delete('/ins/:uuid', controller.inspiration.deleteIns)

export default router;  