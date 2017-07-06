var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res){
    res.render('contact', {
        fries : `I like my fries crispy with extra salt.`
    });
});

module.exports = router;