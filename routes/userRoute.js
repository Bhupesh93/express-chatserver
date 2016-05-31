var express = require('express');
var router = express.Router();
var User = require('../db/model/user');
var UserDetails = require('../db/model/userDetail');

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.find(function (err, results) {

        if (err)
            res.send(err);

        res.json(results);
    });
});

/* post users listing. */
router.post('/', function (req, res, next) {
    var data = new User();
    data.name = req.body.name;
    data.deviceId = req.body.deviceId;
    data.mobileNumber = req.body.mobileNumber;
    data.save(function (err, registeredUser) {
        console.log("registered user " + JSON.stringify(registeredUser));
        if (err)
            res.send(err);
        res.json({message: "user registerted with ", userId: registeredUser._id});
    });
});

router.get('/:id', function (req, res, next) {
    User.find({_id: req.params.id}, function (err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
});


router.delete('/:id', function (req, res, next) {
    console.log("delete called with  " + req.params.id);

    UserDetails.remove({userId: req.params.id}, function (err) {
        if (err)
            res.json({message: "not able to delete from userDetails"});
        else {
            User.remove({_id: req.params.id}, function (err) {
                if (err)
                    res.json({message: "userdetails deleted but not able to delete user "});
                res.json({message: req.params.id + " deleted "})

            });
        }
    });

});

module.exports = router;
