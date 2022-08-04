'use strict'
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//rutas
var project_routes = require('./routes/pocicion')

// middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rutas

app.use('/api',project_routes)

module.exports = app;