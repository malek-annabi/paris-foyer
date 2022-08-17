//connect to database
var mysql = require('mysql2');
con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database:process.env.database
  });