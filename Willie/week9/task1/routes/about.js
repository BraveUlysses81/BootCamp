var express = require('express');
var router = express.Router();

router.get('/about', function(req, res){
    res.render('about', {
        cappucino : `I like my cappuccino to be sweet.`
    });
});

module.exports = router;