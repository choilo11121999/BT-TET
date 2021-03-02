const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const ios = [];
  for (let index = 0; index < 50; index++) {
    ios.push(Math.floor(Math.random() * 30));
  }
  const android = [];
  for (let index = 0; index < 50; index++) {
    android.push(Math.floor(Math.random() * 30));
  }
  const data = {
    ios: ios,
    android: android
  }
  setTimeout(() => {
    res.send(JSON.stringify(data));
  }, 500);
});

module.exports = router;
