var express = require('express');
var router = express.Router();

var ios = Math.floor(Math.random() * 1000);
var android = Math.floor(Math.random() * 1000);

router.get('/', function(req, res, next) {
    res.send({
        ios: ios,
        android: android
    });
});

module.exports = router; 