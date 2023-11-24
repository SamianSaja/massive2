import express from 'express'
import controller from './../controllers/index.js'

const router = express.Router()

router.get('/ins', controller.inspiration.getIns)
router.get('/ins/:uuid', controller.inspiration.searchIns)
router.post('/ins', controller.inspiration.createIns)
router.put('/ins/:uuid', controller.inspiration.updateIns)
router.delete('/ins/:uuid', controller.inspiration.deleteIns)

export default router;  