var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PocicionSchema = Schema({
    id_usuario:String,
    fecha:Date,
    pocicion:String,
    
   
   


});

module.exports = mongoose.model('pocicion',PocicionSchema);