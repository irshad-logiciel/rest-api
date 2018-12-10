const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res) {
    res.send({
        type: 'Get Method',
    });
});

router.post('/po', function (req, res) {
    var user = new User({ fname: req.body.fname });

    user.save();
    res.send({
        data: user,
    });
});

router.put('/pu/:id', function (req, res) {
    res.send({
        type: 'Put Method',
    });
});

router.delete('/del/:id', function (req, res) {
    res.send({
        type: 'Delete Method',
    });
});

module.exports = router;