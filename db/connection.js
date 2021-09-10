const mysql = require('mysql2');

// This code connects to mysql database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'ultramax',
      database: 'work'
    },
    console.log('Connected to the work database.')
);

// Export
module.exports = db;