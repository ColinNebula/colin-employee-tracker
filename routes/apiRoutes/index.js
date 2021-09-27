const express = require('express');
const router = express.Router();

// Role goes on top of employee
router.use(require('./roleRoutes'));
router.use(require('./departmentRoutes'));
router.use(require('./employeeRoutes'));

module.exports = router;