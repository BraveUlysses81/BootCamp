var express = require('express');
var router = express.Router();

var messageBlock = [
    {name: "Jim", message: "I am a cartoonist."},
    {name: "Jane", message: "How about steak for dinner?"},
    {name: "Gary", message: "I like my steak a bit rare."}
];

router.get('/messages', function(req, res){
    res.render('messages', {
        saying: `messageBlock`
    });
});

module.exports = router;

