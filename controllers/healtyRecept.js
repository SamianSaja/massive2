import model from '../models/index.js'
const controller = {}

controller.getRecepts = async(req, res) => {
    try {
        let response = await model.healtyRecept.findAll()
        if (response.length > 0) {
            res.status(200).json({
                message: 'get method healty Recepts',
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

controller.searchRecept = async(req, res) => {
    try {
        let response = await model.healtyRecept.findAll({
            where: {
                contentId: req.params.contentId
            }
        })
        if (response.length > 0) {
            res.status(200).json({
                message: 'Article Healty Recept finded!',
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


controller.createRecept = async(req, res) => {
    try {
        await model.healtyRecept.create({
            contentId: req.body.contentId,
            foodName: req.body.foodName,
            ingredient: req.body.ingredient,
            foodMaking: req.body.foodMaking,
            receptImage: req.body.receptImage,
            diet: req.body.diet
        });
        res.status(201).json({msg: "Article healty Recept Created"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.updateRecept = async(req, res) => {
    try {
        await model.healtyRecept.update({
            contentId: req.body.contentId,
            foodName: req.body.foodName,
            ingredient: req.body.ingredient,
            foodMaking: req.body.foodMaking,
            receptImage: req.body.receptImage,
            diet: req.body.diet
        },{
            where: {
                contentId: req.params.contentId
            }
        });
        res.status(200).json({msg: "Article  Healty Recept Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.deleteRecept = async(req, res) => {
    try {
        await model.healtyRecept.destroy({
            where: {
                contentId: req.params.contentId
            }
        });
        res.status(200).json({msg: "Article Healty Recept Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export default controller