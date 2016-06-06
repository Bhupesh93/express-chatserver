var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var messageSchema =  new Schema({
    fromId:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    toId:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    messageContent:{type: String, required: true}
});

module.exports = mongoose.model('message',messageSchema);
