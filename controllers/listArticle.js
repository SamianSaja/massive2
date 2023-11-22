import model from '../models/index.js'
const controller = {}

controller.getArticles = async(req, res) => {
    try {
        let response = await model.listArticle.findAll()
        if (response.length > 0) {
            res.status(200).json({
                message: 'get method list article',
                data: response
            })
        }else {
            res.status(200).json({
                message: 'not data entry',
                data: []
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

controller.searchArticle = async(req, res) => {
    try {
        let response = await model.listArticle.findAll({
            where: {
                contentId: req.params.contentId
            }
        })
        if (response.length > 0) {
            res.status(200).json({
                message: 'article finded!',
                data: response
            })
        }else {
            res.status(200).json({
                message: 'not data entry',
                data: []
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}


controller.createArticle = async(req, res) => {
    try {
        await model.listArticle.create({
            contentId: req.body.contentId,
            title: req.body.title,
            desk: req.body.desk,
            fillContent: req.body.fillContent,
            img: req.body.img
        });
        res.status(201).json({msg: "Article Created"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.updateArticle = async(req, res) => {
    try {
        await model.listArticle.update({
            contentId: req.body.contentId,
            title: req.body.title,
            desk: req.body.desk,
            fillContent: req.body.fillContent,
            img: req.body.img
        },{
            where: {
                contentId: req.params.contentId
            }
        });
        res.status(200).json({msg: "Article Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.deleteArticle = async(req, res) => {
    try {
        await model.listArticle.destroy({
            where: {
                contentId: req.params.contentId
            }
        });
        res.status(200).json({msg: "Article Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export default controller