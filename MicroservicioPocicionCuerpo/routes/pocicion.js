'use strict'

var express = require('express');
var PocicionController = require('../controllers/pocicion')
var router = express.Router();



router.get('/home',PocicionController.home); 
router.post('/test',PocicionController.test);
router.post('/save-pocicion',PocicionController.saveProject);
router.get('/pociciones',PocicionController.getProjects);
router.get('/pociciones/:fechaInicio/:fechaFin',PocicionController.getProject);



module.exports = router;