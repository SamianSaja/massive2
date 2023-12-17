import express from 'express'
import controller from './../controllers/index.js'
import { verifyToken } from '../middleware/verifyToken.js'
// // const controller = require('../controllers/index.js')

const router = express.Router()

router.get('/users', verifyToken, controller.user.getUsers)
router.post('/users', controller.user.register)
router.post('/login', controller.user.login)
router.get('/token', controller.refreshToken.refToken)
router.delete('/logout', controller.user.logout)



export default router;  