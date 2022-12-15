var express = require("express");
var router = express.Router();

router.get("/helloWorld", function (req, res, next) {
  res.json({ temp: "hello world" });
});

module.exports = router;
