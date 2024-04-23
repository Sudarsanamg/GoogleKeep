const express = require('express')
const Register = require('./Register');

const router = express.Router();

router.post('/register',Register);

module.exports = router;

