
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var connection = require('./database');



var Course = connection.define('course', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title:{
        type: Sequelize.STRING,
        allowNull:false
      },
     date:{
        type: Sequelize.DATE,
     },
     numero:{
        type: Sequelize.INTEGER,
     },
    

     
});




module.exports = Course
