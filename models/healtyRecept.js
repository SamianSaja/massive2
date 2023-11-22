import { DATE, Sequelize } from 'sequelize'
import db from './../config/db.js'
const {DataTypes} = Sequelize

const healtyRecept = db.define('healtyRecept', {
    contentId: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    foodName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    ingredient: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    foodMaking: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    receptImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diet: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'healty-recepts'
})

export default healtyRecept