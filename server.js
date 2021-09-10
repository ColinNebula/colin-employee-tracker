const express = require('express');
const db = require('./db/connection');
// Ports used
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

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