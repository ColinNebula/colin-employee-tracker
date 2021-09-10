const mysql = require('mysql2');
const express = require('express');

// post import
const inputCheck = require('./utils/inputCheck');
// Ports used
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Get all candidates
app.get('/api/employees', (req, res) => {
    const sql = `SELECT employees.*, departments.name 
                AS department_name 
                FROM employees 
                LEFT JOIN departments 
                ON employees.department_id = departments.id`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

// GET a single employee
app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT employees.*, departments.name 
                AS department_name 
                FROM employees 
                LEFT JOIN departments 
                ON employees.department_id = departments.id 
                WHERE employees.id = ?`;
    const params = [req.params.id];    
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
});

// Create an employee
app.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(
        body,
        'first_name',
        'last_name',
        'industry_connected'
      );
      if (errors) {
        res.status(400).json({ error: errors });
        return;
      }

  const sql = `INSERT INTO employees (first_name, last_name, industry_connected, department_id)
    VALUES (?,?,?,?)`;
  const params = [
      body.first_name, 
      body.last_name, 
      body.industry_connected,
      body.department_id
];

    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body,
        changes: result.affectedRows
    });
});
});

// Update a candidate's party
app.put('/api/employee/:id', (req, res) => {
    const errors = inputCheck(req.body, 'department_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
    const sql = `UPDATE employees SET department_id = ? 
                 WHERE id = ?`;
    const params = [req.body.department_id, req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        // check if a record was found
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
});

// Delete an employee
app.delete('/api/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });

  // Route for the departments
app.get('/api/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});  

// Route for a single department
app.get('/api/department/:id', (req, res) => {
    const sql = `SELECT * FROM departments WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });

// Route for delete
app.delete('/api/department/:id', (req, res) => {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
        // checks if anything was deleted
      } else if (!result.affectedRows) {
        res.json({
          message: 'Department not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });



// // Create a employee
// const sql = `INSERT INTO employees (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronaldo', 'Firebanks', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });  

// db.query(`SELECT * FROM employees`, (err, rows) => {
//     console.log(rows);
// }); 

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    // This is the function that will start the Express.js server on port 3001
    app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
  });
});