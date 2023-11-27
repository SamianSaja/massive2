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
                uuid: req.params.uuid
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
            uuid: req.body.uuid,
            food_name: req.body.food_name,
            ingredient: req.body.ingredient,
            food_making: req.body.food_making,
            img: req.body.img,
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
            uuid: req.body.uuid,
            food_name: req.body.food_name,
            ingredient: req.body.ingredient,
            food_making: req.body.food_making,
            img: req.body.img,
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
                uuid: req.params.uuid
            }
        });
        res.status(200).json({msg: "Article Healty Recept Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export default controller