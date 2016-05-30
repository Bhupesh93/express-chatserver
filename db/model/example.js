var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var exampleSchema =  new Schema({
   name : String
});

module.exports = mongoose.model('Example', exampleSchema);

