const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    port: 5433
});

module.exports = sequelize;