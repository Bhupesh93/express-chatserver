var express = require('express');
var router = express.Router();
var example = require('../db/model/example');

/* GET users listing. */
router.get('/', function(req, res, next) {
 example.find(function(err,results){

   if(err)
       res.send(err);

   res.json(results);
 });
});

/* post users listing. */
router.post('/', function(req, res, next) {
  var data = new example();
  data.name = req.body.name;
  data.save(function(err){
   if(err)
       res.send(err);
    res.json({message:"example received"});
  });
});

module.exports = router;
