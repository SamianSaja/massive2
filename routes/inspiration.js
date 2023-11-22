import express from 'express'
import controller from './../controllers/index.js'

const router = express.Router()

router.get('/ins', controller.inspiration.getIns)
router.get('/ins/:contentId', controller.inspiration.searchIns)
router.post('/ins', controller.inspiration.createIns)
router.put('/ins/:contentId', controller.inspiration.updateIns)
router.delete('/ins/:contentId', controller.inspiration.deleteIns)

export default router;  