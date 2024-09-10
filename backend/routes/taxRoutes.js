const express = require('express');
const router = express.Router();
const taxController = require('../controllers/taxController');
const verifyToken = require('../middleware/verifyToken');

router.post('/tax', verifyToken, taxController.calculateTax);

module.exports = router;