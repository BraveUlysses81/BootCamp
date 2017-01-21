var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/searchresults', function(req, res) {

    var moviePrim = req.query.movie;
    var movie = moviePrim.replace(" ", "+");
    var url = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&r=json';

    request(url, function (error, response, body) {
        if (error){
            console.log("there was an error");
        } if(response.statusCode != 200) {
            console.log("Status Code " + response.statusCode);
        } else{
            var obj = JSON.parse(body);
            // city = obj.current_observation.display_location.city;
            // temp = obj.current_observation.temp_f;
            // outlook = obj.current_observation.icon;
            // humidity = obj.current_observation.relative_humidity;
            rating = obj.tomatoMeter + '%';
            console.log(obj);
            res.json(rating);
        }

        // var comment;
        // if (parseInt(temp) < 70){
        //     comment = "It's quite cool out there. Please don't forget to wear a jacket."
        // }
        // else{
        //     comment = "It's hot out there! Be sure to drink plenty of water and wear sunscreen."
        // }
        //
        // res.render('searchresults', {
        //     city : city,
        //     temp : temp,
        //     out : outlook,
        //     humid : humidity,
        //     comment : comment
        // });
    });

});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});