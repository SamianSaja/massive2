import express from 'express'
import controller from './../controllers/index.js'

const router = express.Router()

router.get('/recept', controller.healtyRecept.getRecepts)
router.get('/recept/:contentId', controller.healtyRecept.searchRecept)
router.post('/recept', controller.healtyRecept.createRecept)
router.put('/recept/:contentId', controller.healtyRecept.updateRecept)
router.delete('/recept/:contentId', controller.healtyRecept.deleteRecept)

export default router;  