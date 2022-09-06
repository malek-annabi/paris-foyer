const express =require("express");
const cors = require('cors');

//.env
require("dotenv").config();

//express
const app =express();
//cors
app.use(cors());
// Configure bodyparser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());

require("./connect")
require("./routes/user")(app);
require("./routes/student")(app);
require("./routes/contrat")(app);

// server start
 app.listen(process.env.PORT || 3500,() =>{
     console.log( "port 3500");
 })