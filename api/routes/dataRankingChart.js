const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const iosArr = [];
  for (let index = 0; index < 50; index++) {
    iosArr.push(Math.floor(Math.random() * 30));
  }
  const androidArr = [];
  for (let index = 0; index < 50; index++) {
    androidArr.push(Math.floor(Math.random() * 30));
  }
  const data = [iosArr, androidArr];
  setTimeout(() => {
    res.send(JSON.stringify(data));
  }, 5000);
});

module.exports = router;
