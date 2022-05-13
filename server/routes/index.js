var express = require("express");
var router = express.Router();

/* GET /api/message */
router.get("/message", function (req, res, next) {
  res.json("Hello from the API!");
});

module.exports = router;
