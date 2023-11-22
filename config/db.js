import { Sequelize } from 'sequelize';

const db = new Sequelize('test', 'root', 'samian', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;