var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var registerationSchema =  new Schema({
    deviceId : String,
    mobileNumber :String
});

module.exports = mongoose.model('RegisteredUser', registerationSchema);
