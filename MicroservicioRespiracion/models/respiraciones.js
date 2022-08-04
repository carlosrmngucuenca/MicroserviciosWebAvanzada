var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RespiracionesSchema = Schema({
    id_usuario:String,
    fecha:Date,
    respiracion:String
});

module.exports = mongoose.model('respiraciones',RespiracionesSchema);