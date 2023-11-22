import express from 'express'
import controller from './../controllers/index.js'
// const controller = require('../controllers/index.js')

const router = express.Router()

router.get('/tips', controller.tips.getTips)
router.get('/tips/:contentId', controller.tips.searchTips)
router.post('/tips', controller.tips.createTips)
router.put('/tips/:contentId', controller.tips.updateTips)
router.delete('/tips/:contentId', controller.tips.deleteTips)

export default router;  