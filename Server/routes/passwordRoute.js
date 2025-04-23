const express = require('express');
const router = express.Router();
const { hashPassword } = require('../Controllers/PasswordController');

router.post('/hash', hashPassword);

module.exports = router;
