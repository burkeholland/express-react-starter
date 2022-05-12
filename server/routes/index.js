var express = require("express");
var router = express.Router();

router.get("/message", function (req, res, next) {
  res.json({
    title: "Hello from the API!",
    details: "Checkout the API at server/routes/index.js",
  });
});

module.exports = router;
