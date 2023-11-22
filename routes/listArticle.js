import express from 'express'
import controller from './../controllers/index.js'
// const controller = require('../controllers/index.js')

const router = express.Router()

router.get('/articles', controller.listArticle.getArticles)
router.get('/articles/:contentId', controller.listArticle.searchArticle)
router.post('/articles', controller.listArticle.createArticle)
router.put('/articles/:contentId', controller.listArticle.updateArticle)
router.delete('/articles/:contentId', controller.listArticle.deleteArticle)

export default router;  