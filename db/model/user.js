var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema =  new Schema({
    name : {type: String, required: true, unique: true},
    deviceId : {type: String, required: true, unique: true},
    mobileNumber :{type: String, required: true, unique: true}
});

module.exports = mongoose.model('User', userSchema);
