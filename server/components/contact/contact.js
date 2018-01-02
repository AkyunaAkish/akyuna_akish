const express = require('express');
const router = express.Router();

let sendEmail = require('./controllers/sendEmail.js');

router.post('/', sendEmail);

module.exports = router;