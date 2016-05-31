var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema =  new Schema({
    userId :{type: Schema.Types.ObjectId, ref: 'RegisteredUser',required: true, unique: true },
    userName : {type: String, required: true, unique: true},
    status : { type: String, enum: ['online', 'offline'] },
    quotes :String,
    lastSeen :{ type: Date, default: Date.now }

});

module.exports = mongoose.model('UserDetail', userSchema);
