var mongoose = require('mongoose');
var app = require('./app');
var port= 3750;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://controlsuenoweb:uPQbDOE3lQDFrkFTlp3Bbs3DXankhcrtPneX8BJkpDkpVkophhJmHCHzO99WBWveX1v93z3bjvB2XuvqGgfWTw==@controlsuenoweb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@controlsuenoweb@')
.then( () => {
    console.log("Conexxion con exito");

    app.listen(port,()=>{
        console.log('servidor corriendo en el puerto 3750')
    })

})
.catch(err => console.log(err));