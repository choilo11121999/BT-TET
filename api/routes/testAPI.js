const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const ios = Math.floor(Math.random() * 1000);
  const android = Math.floor(Math.random() * 1000);
  const data = [ios, android];
  setTimeout(() => {
    res.send(data);
  }, 10000);
});

module.exports = router;
