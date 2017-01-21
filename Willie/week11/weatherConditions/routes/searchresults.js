var express = require('express');
var router = express.Router();
var request = require('request');

var state = 
var city =
var apiKey = '49493520fcdf1192';
var url = 'http://api.wunderground.com/' + apiKey + '/geolookup/conditions/q/' + state + '/' + city + '.json';

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the retrieved object in the console
    }
})


/* GET searchresults. */
router.get('/', function(req, res) {
  res.send('searchresults',
      {

      });
});

module.exports = router;
