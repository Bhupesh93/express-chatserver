var express = require('express');
var router = express.Router();
var UserDetails = require('../db/model/userDetail');
var User = require('../db/model/user');

router.get('/', function(req, res, next) {
  UserDetails.find(function(err,users){
    if(err)
      res.send(err);
    res.json(users);
  });
});

router.get('/:id', function(req, res, next) {
  console.log("the id got is "+req.params.id);
  UserDetails.find({userId:req.params.id},function(err,users){
    if(err)
      res.send(err);
    res.json(users);
  });
});


router.post('/', function(req, res, next) {

    User.find({_id:req.body.userId},function(err,existingUser){
      if(err || !Object.keys(existingUser).length > 0)
        res.send({message:"user not yet registered"});
      else {

        console.log("the user found " + JSON.stringify(existingUser));
        var user = new UserDetails();
        user.userId = existingUser[0]._id;
        user.status = req.body.status;
        user.quotes = req.body.quotes;
        user.lastSeen = req.body.lastSeen;
        console.log("user ",user);
        user.save(function(err,storedUser){
          if(err)
            res.send(err);
          else {
            console.log("the user got is", JSON.stringify(storedUser));
            res.json({message: "user details stored successfully"});
          }
        });
      }
    });



});

router.delete('/:id', function(req, res, next) {
  console.log("delete called with  "+req.params.id);
  UserDetails.remove({userId:req.params.id }, function(err){
    if(err)
        res.json({message:"not able to remove"});
    res.json({message:req.params.id+ "'s details deleted "});

  });

});

module.exports = router;