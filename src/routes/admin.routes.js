// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')

// ************ Controller Require ************
const {create, store, edit, update, destroy } = require('../controllers/adim');
const { dynamicFile } = require('../middleware/upload');


/*** CREATE ONE PRODUCT ***/ 
router.get('/crear', create); 
router.post('/crear', dynamicFile.single('image'), store); 


/*** EDIT ONE PRODUCT ***/ 
router.get('/editar/:id', edit); 
router.put('/editar/:id', dynamicFile.single('image') ,update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/eliminar/:id', destroy); 


module.exports = router;