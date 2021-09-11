const express = require('express');
const mysql = require('mysql2');

// Port Used
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'ultramax',
      database: 'companyn'
    },
    console.log('Connected to the companyn database.')
);


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

db.query(`SELECT * FROM employees`, (err, rows) => {
    console.log(rows);
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});