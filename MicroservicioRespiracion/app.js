'use strict'
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//cargar el archivo de rutas
var project_routes = require('./routes/respiraciones')

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

// rutas

app.use('/api',project_routes)

module.exports = app;