const express = require("express");
const router = express.Router();
const { times } = require("lodash");
const moment = require("moment");

router.get("/", function (req, res, next) {
  const date = [];
  var length = 0, day = 1, month = 12, year = 2020;
  while (length <= 50) {
    day > 31 ? (month ++, day = 1) : (day, month);
    month > 12 ? (month = 1, year++) : (month, year);
    const time = moment((`${year}-${month}-${day}`));
    (time.isValid()) ? date.push(time.format('YYYY-MM-DD')) : date;
    day++;
    length = date.length;
  }

  const getRandomInteger = () => {
    return Math.floor(Math.random() * 30)
  }
  const ios = times(50, getRandomInteger);
  const android = times(50, getRandomInteger);
  const data = {
    date: date,
    ios: ios,
    android: android
  }
  setTimeout(() => {
    res.send(data);
  }, 5000);
});

module.exports = router;
