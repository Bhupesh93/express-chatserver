var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userDetailSchema =  new Schema({
    userId :{type: Schema.Types.ObjectId, ref: 'User',required: true, unique: true},
    status : { type: String, enum: ['online', 'offline'] },
    quotes :String,
    lastSeen :{ type: Date, default: Date.now }
});

module.exports = mongoose.model('UserDetail', userDetailSchema);
