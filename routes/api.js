const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send({
        type: 'Get Method',
    });
});

router.post('/po', function (req, res) {
    res.send({
        type: 'Post Method',
        name: req.body.name,
        l_name: req.body.l_name,
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