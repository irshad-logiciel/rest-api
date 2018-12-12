const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });
});

router.post('/po', function (req, res, next) {
    User.create(req.body).then(function(user){
        res.send({user});
    }).catch(next);    
});

router.put('/pu/:id', function (req, res, next) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send({
                error: false,
                user: user,
                message: 'update successfully',
            }).status(200);
        });
    }).catch(next);
});

router.delete('/del/:id', function (req, res, next) {
    console.log(req.params.id);
    User.findByIdAndRemove({_id: req.params.id}).then(function(user) {
        res.send({
            error: false,
            user: user,
            message: 'User is deleted',
            status_code: 200,
        }).status(200);
    }).catch(next);
});

module.exports = router;