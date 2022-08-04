'use strict'
var Pocicion = require('../models/pocicion')
const apiAdapter = require('../../GateWay/routers/apiAdapter')
const BASE_URL = 'http://localhost:3700'
const api = apiAdapter(BASE_URL)


var controller ={
    home: function(req,res){
        return res.status(200).send(
            {
               messsage: 'Todo es posible home'
            }
        );


    },

    test: function(req,res){
        return res.status(200).send(
            {
               messsage: 'Todo es posible test'
            }
        );


    },

    saveProject:function(req,res){
        var p_project = new Pocicion();
        var params = req.body;
        p_project.id_usuario=params.id_usuario;
        p_project.fecha=params.fecha;
        p_project.pocicion=params.pocicion;
       

        p_project.save(
            (err,projectStored) =>{
                if(err) return res.status(500).send({message:'Error al guardar el Documento'});
                if(!projectStored) return res.status(404).send('No se ha podido guardar el documento');
                return res.status(200).send({data_pocicion:projectStored});
            });

      

    },

    getProjects: function(req,res){
        Pocicion.find({}).exec(
            (err,projects) => {
               if(err) return res.status(500).send({message:'Error al devolver los datos'});
               if(!projects)return res.status(404).send({message:'No hay pociciones para mostrar'}); 
               return res.status(200).send({projects});
            }
            );

    },

    getProject: function(req,res){
        var start = req.params.fechaInicio;
        var end = req.params.fechaFin;
        Pocicion.find({fecha: {$gte: start, $lte: end}}).exec(
            (err,projects) => {
               if(err) return res.status(500).send({message:'Error al devolver los datos'});
               if(!projects)return res.status(404).send({message:'No hay pociciones para mostrar'}); 
               return res.status(200).send({projects});
            }
            );

    },






};

module.exports= controller;