import express from 'express'
import controller from './../controllers/index.js'
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/diet/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

const router = express.Router()

router.get('/diet', controller.diet.getDiet)
router.get('/diabetik', controller.diet.getDiabetik)
router.get('/vegetarian', controller.diet.getVegetarian)
router.get('/vegan', controller.diet.getVegan)
router.get('/diet/:uuid', controller.diet.searchDiet)
router.post('/diet', upload.single('img'), controller.diet.createDiet)
router.put('/diet/:uuid', upload.single('img'), controller.diet.updateDiet)
router.delete('/diet/:uuid', controller.diet.deleteDiet)


export default router;  