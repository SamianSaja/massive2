import model from '../models/index.js'
const controller = {}

controller.getTips = async(req, res) => {
    try {
        let response = await model.tips.findAll()
        if (response.length > 0) {
            res.status(200).json({
                message: 'get tips and triks',
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

controller.searchTips = async(req, res) => {
    try {
        let response = await model.tips.findOne({
            where: {
                uuid: req.params.uuid
            }
        })
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error.message)
    }
}


controller.createTips = async(req, res) => {
    try {
        await model.tips.create({
            uuid: req.body.uuid,
            title: req.body.title,
            desk: req.body.desk,
            fill_content: req.body.fill_content,
            img: req.file.path
        });
        res.status(201).json({msg: "Tips and Triks Created"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.updateTips = async(req, res) => {
    try {
        await model.tips.update({
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
        res.status(200).json({msg: "Tips and Triks Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

controller.deleteTips= async(req, res) => {
    try {
        await model.tips.destroy({
            where: {
                uuid: req.params.uuid
            }
        });
        res.status(200).json({msg: "Tips and Triks Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export default controller