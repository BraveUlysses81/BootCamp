var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('home.ejs', {
        banner : `Welcome to the Donut Shop`,
        message : `We bake the hottest, freshest donuts that you can imagine. You want donuts? We got it.`
    });
});

module.exports = router;
