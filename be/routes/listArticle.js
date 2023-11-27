import express from 'express'
import controller from './../controllers/index.js'
// const controller = require('../controllers/index.js')

const router = express.Router()

router.get('/articles', controller.listArticle.getArticles)
router.get('/articles/:uuid', controller.listArticle.searchArticle)
router.post('/articles', controller.listArticle.createArticle)
router.put('/articles/:uuid', controller.listArticle.updateArticle)
router.delete('/articles/:uuid', controller.listArticle.deleteArticle)

export default router;  