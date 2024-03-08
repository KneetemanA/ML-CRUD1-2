// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register, login} = require('../controllers/authentication');

router.get('/register' , register)

router.get('/login' , login)


module.exports = router