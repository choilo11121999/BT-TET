var express = require('express');
var router = express.Router();

var ios = Math.floor(Math.random() * 1000);
var android = Math.floor(Math.random() * 1000);
var data = [ios, android];

router.get('/', function(req, res, next) {
    res.send(data);
});

module.exports = router; 