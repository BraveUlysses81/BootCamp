var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/searchresults', function(req, res) {
    var citySpace = req.query.city;
    var city = citySpace.replace(" ", "_");
    var state = req.query.state;
    var apiKey = '6011201e7bc13c02';
    var url = 'http://api.wunderground.com/api/' + apiKey + '/conditions/q/' + state + '/' + city + '.json';

    var temp = 'a';
    var outlook = 'b';
    var humidity = 'c';

    request(url, function (error, response, body) {
            if (error){
                console.log("there was an error");
            } if(response.statusCode != 200) {
                console.log("Status Code " + response.statusCode);
            } else{
                var obj = JSON.parse(body);
                city = obj.current_observation.display_location.city;
                temp = obj.current_observation.temp_f;
                outlook = obj.current_observation.icon;
                humidity = obj.current_observation.relative_humidity;
            }

            var comment;
            if (parseInt(temp) < 70){
                comment = "It's quite cool out there. Please don't forget to wear a jacket."
            }
            else{
                comment = "It's hot out there! Be sure to drink plenty of water and wear sunscreen."
            }

        res.render('searchresults', {
            city : city,
            temp : temp,
            out : outlook,
            humid : humidity,
            comment : comment
        });
    })


});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});