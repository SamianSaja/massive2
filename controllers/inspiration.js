import model from '../models/index.js'
const controller = {}

controller.getIns = async(req, res) => {
    try {
        let response = await model.inspiration.findAll()
        if (response.length > 0) {
            res.status(200).json({
                message: 'get  Inspiration article',
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

controller.searchIns = async(req, res) => {
    try {
        let response = await model.inspiration.findAll({
            where: {
                uuid: req.params.uuid
            }
        })
        if (response.length > 0) {
            res.status(200).json({
                message: 'Article Inspiration finded!',
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


controller.createIns = async(req, res) => {
    try {
        await model.inspiration.create({
            uuid: req.body.uuid,
            title: req.body.title,
            desk: req.body.desk,
            fill_content: req.body.fill_content,
            img: req.body.img
        });
        res.status(201).json({msg: "Article Inspiration Created"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.updateIns = async(req, res) => {
    try {
        await model.inspiration.update({
            uuid: req.body.uuid,
            title: req.body.title,
            desk: req.body.desk,
            fill_content: req.body.fill_content,
            img: req.body.img
        },{
            where: {
                uuid: req.params.uuid
            }
        });
        res.status(200).json({msg: "Inspiration Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.deleteIns= async(req, res) => {
    try {
        await model.inspiration.destroy({
            where: {
                uuid: req.params.uuid
            }
        });
        res.status(200).json({msg: "Inspiration Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export default controller