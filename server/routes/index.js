var express = require('express');
var router = express.Router();
const requestPromise = require('request-promise')
var laliga = require('./laliga')
var champions = require('./champions')
var seriea = require('./seriea')
var epl = require('./epl')

router.get('/message', function(req, res, next) {
  res.json('Soccer Scores, No Opinions');
});

router.use('/laliga', laliga);

router.use('/champions', champions);

router.use('/epl', epl);

router.use('/seriea', seriea);

module.exports = router;
