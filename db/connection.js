const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        //Port
        port: 3001,
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'ultramax',
        database: 'companyn'
});



// Export
module.exports = connection;