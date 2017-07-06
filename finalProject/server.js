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

    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=754a3ccbbf27733b9dc4574c49ee3b9a&language=en-US&page=1';

    request(url, function (error, response, body) {
        if (error){
            console.log("there was an error");
        } if(response.statusCode != 200) {
            console.log("Status Code " + response.statusCode);
        } else{
            var movies = JSON.parse(body);

            /*title = obj.results[0].original_title;
            overview = obj.results[0].overview;
            rating = obj.results[0].vote_average;
            image = obj.results[0].poster_path;*/

            console.log(movies);

            res.render('searchresults', {
                movies : movies
            });
        }
    });

});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// API Key (V3 auth)  54a3ccbbf27733b9dc4574c49ee3b9a

// API Read Access Token (v4 auth)   eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTRhM2NjYmJmMjc3MzNiOWRjNDU3NGM0OWVlM2I5YSIsInN1YiI6IjU4YThhYzkxYzNhMzY4NjQzNTAwMTlmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._pVbz2B_mcz6VVQph0Gd1B__fCu8qA1_rrtk8WXgbyM