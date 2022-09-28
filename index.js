const express = require('express')
const cors = require('cors');
const app = express();
 const Sequelize = require("sequelize");
const bodyParser = require('body-parser');

//  import route
const courseRoute = require('./routes/course');


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


app.use('/api',courseRoute);



//**** connect with MySQL */

const dbConfig = require("./env");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,dbConfig.PASSWORD,{

   host:dbConfig.HOST,
   dialect: dbConfig.DIALECT
});

sequelize.authenticate().then(() => {
   console.log('Connection has been  successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});


//** */




app.use(cors())

const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`app is running on port ${port}`));


