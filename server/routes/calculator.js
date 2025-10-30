const express = require('express');
const router = express.Router();
const { calculate, getHistory } = require('../controllers/calculatorController');
const auth = require('../middleware/auth');

router.post('/calculate', auth, calculate);
router.get('/history', auth, getHistory);

module.exports = router;
