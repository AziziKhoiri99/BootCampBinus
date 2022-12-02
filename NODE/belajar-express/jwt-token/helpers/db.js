const config = require('config.json');
const mysql = require('mysql');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`create database if not exist\`$(database)\`;`)

    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    db.user = require('../users/user.model')(sequelize);

    await sequelize.sync();
}