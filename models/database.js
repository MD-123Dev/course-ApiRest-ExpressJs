var Sequelize = require('sequelize');

const database = new Sequelize(
  'coursdb', 
  'root', 
  '', 
  {
    host: 'localhost',
    dialect: 'mysql' 
  }
);

database.sync()






module.exports = database;
