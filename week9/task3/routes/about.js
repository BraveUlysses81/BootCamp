var express = require('express');
var router = express.Router();

router.get('/about', function(req, res){
    res.render('about.ejs', {
        banner : `About our company`,
        message : `We got glazed, chocolate iced, raspberry filled, chocolate...`
    });
});

module.exports = router;
