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
        let response = await model.listArticle.findOne({
            where: {
                uuid: req.params.uuid
            }
        })
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error.message)
    }
}


controller.createArticle = async(req, res) => {
    // console.log(req.file)
    try {
        await model.listArticle.create({
            uuid: req.body.uuid,
            title: req.body.title,
            desk: req.body.desk,
            fill_content: req.body.fill_content,
            img: req.file.path
        });
        res.status(201).json({msg: "Article Created"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.updateArticle = async(req, res) => {
    try {
        await model.listArticle.update({
            uuid: req.body.uuid,
            title: req.body.title,
            desk: req.body.desk,
            fill_content: req.body.fill_content,
            img: req.file.path
        },{
            where: {
                uuid: req.params.uuid
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
                uuid: req.params.uuid
            }
        });
        res.status(200).json({msg: "Article Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export default controller