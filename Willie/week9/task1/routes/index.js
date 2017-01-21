var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {
        pizza : `I like my pizza with extra pineapple.`
    });
});

module.exports = router;
