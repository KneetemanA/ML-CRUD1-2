// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { detail, list} = require('../controllers/products');

/*** GET ALL PRODUCTS ***/ 
router.get('/', list); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', detail); 


module.exports = router;
