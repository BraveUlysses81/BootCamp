var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var Yelp = require('yelp');


var yelp = new Yelp({
    consumer_key: 'H_P8j2b90W4IJuuXkRz99A',
    consumer_secret: 'sLEvfNN3yCYd6114ShvLSHLhd58',
    token: 'GJq2tpjYKEdmZuHSY0PcTjtr2Z3Svnox',
    token_secret: 'DCBW_k-_UxyBHCUXd5JbEDiOLpQ'
});

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

    var loc = req.query.place;
    var busName;
    var rating;

    yelp.search({ term: 'food', location: loc, limit: 10 })
        .then(function (data) {
            console.log(data);

            res.render('searchresults', {
                raunts : data
            });

            /*
            busName = data.businesses[1].name;
            rating = data.businesses[1].rating_img_url_large;

            res.render('searchresults', {
                name : busName,
                rate : rating,
                location : loc
            });
            */
        })
        .catch(function (err) {
            console.error(err);
            if (err.statusCode == 400)
            res.render('error', {
                place : loc
            });
        });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

/*
Consumer Key: H_P8j2b90W4IJuuXkRz99A
Consumer Secret: sLEvfNN3yCYd6114ShvLSHLhd58
Token: GJq2tpjYKEdmZuHSY0PcTjtr2Z3Svnox
Token Secret: DCBW_k-_UxyBHCUXd5JbEDiOLpQ
*/
