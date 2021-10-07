// Import mysql
const mysql = require('mysql2');
//.env
require('dotenv').config();

// create connection to our db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ultramax', 
    database: 'employees'
});


  module.exports = db;

