const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const time = [];
  for (let i = 11; i <= 12; i++) {
    for (let j = 1; j <= 30; j++) {
      time.push({
        year: '2020',
        month: i < 10 ? `0${i}` : i,
        day: j < 10 ? `0${j}` : j
      });
    }
  }
  
  const data = time.map((time, index) => {
    return {
      date: `${time.year}-${time.month}-${time.day}`,
      ios: Math.floor(Math.random() * 30),
      android: Math.floor(Math.random() * 30)
    }
  });
  setTimeout(() => {
    res.send(JSON.stringify(data));
  }, 5000);
});

module.exports = router;
