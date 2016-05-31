var express = require('express');
var router = express.Router();
var registerUser = require('../db/model/registerUser');

/* GET users listing. */
router.get('/', function(req, res, next) {
   registerUser.find(function(err,results){

        if(err)
            res.send(err);

        res.json(results);
    });
});

/* post users listing. */
router.post('/', function(req, res, next) {
    var data = new registerUser();
    data.deviceId = req.body.deviceId;
    data.mobileNumber = req.body.mobileNumber;
    data.save(function(err,registeredUser){
        console.log("registered user "+JSON.stringify(registeredUser));
        if(err)
            res.send(err);
        res.json({message:"user registrated ",userId:registeredUser._id});
    });
});

module.exports = router;
