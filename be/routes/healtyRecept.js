import express from 'express'
import controller from './../controllers/index.js'

const router = express.Router()

router.get('/recept', controller.healtyRecept.getRecepts)
router.get('/recept/:uuid', controller.healtyRecept.searchRecept)
router.post('/recept', controller.healtyRecept.createRecept)
router.put('/recept/:uuid', controller.healtyRecept.updateRecept)
router.delete('/recept/:uuid', controller.healtyRecept.deleteRecept)

export default router;  