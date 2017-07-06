var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('home.ejs', {
        banner : `Welcome to the Bank`,
        message : `Login to see your payroll account.`
    });
});

module.exports = router;