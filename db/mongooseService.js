var mongoose = require('mongoose');

var dbUri = 'mongodb://localhost:27017/chatDb';

mongoose.connect(dbUri);

mongoose.connection.on('connected',function(){

    console.log("Mongoose connection open to "+dbUri);

});

mongoose.connection.on('error',function(){

    console.log("Error in connecting mongoose to "+dbUri);

});

mongoose.connection.on('disconnected',function(){

    console.log("Mongoose disconnecting it's connection to "+dbUri);

});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

/*
require("./model/example");*/
