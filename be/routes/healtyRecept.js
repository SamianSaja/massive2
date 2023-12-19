import express from 'express'
import controller from './../controllers/index.js'
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/resep/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

const router = express.Router()

router.get('/recept', controller.healtyRecept.getRecepts)
router.get('/recept/:uuid', controller.healtyRecept.searchRecept)
router.post('/recept', upload.single('img'), controller.healtyRecept.createRecept)
router.put('/recept/:uuid', upload.single('img'), controller.healtyRecept.updateRecept)
router.delete('/recept/:uuid', controller.healtyRecept.deleteRecept)

router.get('/saved/:user_id', controller.healtyRecept.getSaved)
router.post('/saved', controller.healtyRecept.addSaved)


export default router;  