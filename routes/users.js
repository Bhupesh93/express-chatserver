var express = require('express');
var router = express.Router();
var userDetails = require('../db/model/userDetails');


/* GET users listing. */
router.get('/', function(req, res, next) {
  userDetails.find(function(err,users){
    if(err)
      res.send(err);
    res.json(users);
  });
});

router.get('/:id', function(req, res, next) {
  console.log("the id got is "+req.params.id);
  userDetails.find({userId:req.params.id},function(err,users){
    if(err)
      res.send(err);
    res.json(users);
  });
});
/* post users listing. */
router.post('/', function(req, res, next) {
  var user = new userDetails();
  user.userId = req.body.userId;
  user.userName = req.body.userName;
  user.status = req.body.status;
  user.quotes = req.body.quotes;
  user.lastSeen = req.body.lastSeen;
console.log("user ",user);
  user.save(function(err,storedUser){
    console.log(" user details  "+JSON.stringify(storedUser));
    if(err)
      res.send(err);
    res.json({message:"user details stored successfully ",userId:user.userId});
  });
});

module.exports = router;