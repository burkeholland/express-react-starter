var express = require('express');
var router = express.Router();
const requestPromise = require('request-promise')
var laliga = require('./laliga')
var champions = require('./champions')

router.get('/message', function(req, res, next) {
  res.json('Soccer Scores, No Opinions');
});

router.use('/laliga', laliga);

router.use('/champions', champions);

// router.get('/laliga/matchday', function(req, res, next) {
//     const url =
//     {
//         uri: 'http://api.football-data.org/v1/competitions/455',
//         headers: {
//         'X-Response-Control': 'minified',
//         'X-Auth-Token': 'ea068c8bc152429c9fdca1afec179924'
//         }
//     }
//     requestPromise.get(url, (error, response, body) => {
//         let json = JSON.parse(body);
//         return json.currentMatchday;
//     })
//     .then(nextWeeksGames => {
//         let json = JSON.parse(nextWeeksGames);
//         console.log(json.currentMatchday);
//         return res.send({matchday: json.currentMatchday});
//     })
//   });

//   router.get('/laliga/today/:matchdayId', function(req, res, next) {
//     const matchdayId = req.params.matchdayId;
//     const url =
//     {
//         uri: `http://api.football-data.org/v1/competitions/455/fixtures?matchday=${matchdayId}`,
//         headers: {
//         'X-Response-Control': 'minified',
//         'X-Auth-Token': 'ea068c8bc152429c9fdca1afec179924'
//         }
//     }
//     requestPromise.get(url, (error, response, body) => {
//         let json = JSON.parse(body);
//         return json.fixtures;
//     })
//     .then(nextWeeksGames => {
//         let json = JSON.parse(nextWeeksGames);
//         return res.send(json.fixtures);
//     })
//   });  

// router.get('/laliga/next', function(req, res, next) {
//   const url =
//   {
//       uri: 'http://api.football-data.org/v1/competitions/455/fixtures?timeFrame=n7',
//       headers: {
//       'X-Response-Control': 'minified',
//       'X-Auth-Token': 'ea068c8bc152429c9fdca1afec179924'
//       }
//   }
//   requestPromise.get(url, (error, response, body) => {
//       let json = JSON.parse(body);
//       return json.fixtures;
//   })
//   .then(nextWeeksGames => {
//       let json = JSON.parse(nextWeeksGames);
//       return res.send(json.fixtures);
//   })
// });

// router.get('/laliga/prev', function(req, res, next) {
//   const url =
//   {
//       uri: 'http://api.football-data.org/v1/competitions/455/fixtures?timeFrame=p7',
//       headers: {
//       'X-Response-Control': 'minified',
//       'X-Auth-Token': 'ea068c8bc152429c9fdca1afec179924'
//       }
//   }
//   requestPromise.get(url, (error, response, body) => {
//       let json = JSON.parse(body);
//       return json.fixtures;
//   })
//   .then(pastWeeksGames => {
//       let json = JSON.parse(pastWeeksGames);
//       return res.send(json.fixtures);
//   })
// });

// router.get('/laliga/today', function(req, res, next) {
//   res.json('Hey My Ass Stinks');
// });


module.exports = router;
