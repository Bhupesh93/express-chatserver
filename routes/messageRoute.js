var express = require('express');
var router = express.Router();
var Message = require('../db/model/message');
var User = require('../db/model/user');


router.get('/:userId', function (req, res, next) {
    console.log(JSON.stringify(req.params));
    Message.find({toId: req.params.userId},function (err, results) {
        if (err)
            res.send(err);
        console.log("results got ",JSON.stringify(results));
        res.json(results);
    });
});

/* post users listing. */
router.post('/', function (req, res, next) {
    var data = new Message ;
    data.fromId = req.body.fromId;
    data.toId = req.body.toId;
    data.messageContent = req.body.messageContent;
    console.log("message is " + JSON.stringify(data));
    data.save(function (err, messageSaved) {
        console.log("registered user " + JSON.stringify(messageSaved));
        if (err)
            res.send(err);
        res.json({message: "message sent "});
    });
});


router.delete('/:id', function (req, res, next) {
    console.log("delete called with  " + req.params.id);

    Message.remove({_id: req.params.id}, function (err) {
                res.json({message: req.params.id + " deleted "})

    });

});

module.exports = router;
