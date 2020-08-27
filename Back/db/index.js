const Sequelize = require('sequelize');
const host = process.env.HOST || 'localhost'
const db = new Sequelize('postgres', 'postgres', 'postgres', {
   host: host,
   dialect: 'postgres',
});


module.exports = db;



