import { DATE, Sequelize } from 'sequelize'
import db from './../config/db.js'
const {DataTypes} = Sequelize

const healtyRecept = db.define('healtyRecept', {
    uuid: {
        type: DataTypes.STRING(36),
        primaryKey: true
    },
    food_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredient: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    food_making: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diet: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'healty_recepts'
})

export default healtyRecept