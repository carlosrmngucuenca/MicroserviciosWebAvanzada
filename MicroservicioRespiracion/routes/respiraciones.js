'use strict'

var express = require('express');
var RespiracionesController = require('../controllers/respiraciones')
var router = express.Router();

router.get('/home',RespiracionesController.home);
router.post('/test',RespiracionesController.test);
router.post('/save-respiracion',RespiracionesController.saveProject);
router.get('/respiraciones',RespiracionesController.getProjects);
router.get('/respiraciones/:fechaInicio/:fechaFin',RespiracionesController.getProject);


module.exports = router;