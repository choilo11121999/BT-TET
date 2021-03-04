const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get("/", function (req, res, next) {
  const data = _.map(
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    (day) => ({
      day: day,
      hours: _.map(_.range(0, 23), time => ({
      time: `${time}:00`,
      value: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
      }))
    })
  )
  
  setTimeout(() => {
    res.send(data);
  }, 5000);
});

module.exports = router;
