var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(require('./routes/messages'));

var messages = [
    {name: "Jim", message: "I am a cartoonist."},
    {name: "Jane", message: "How about steak for dinner?"},
    {name: "Gary", message: "I like my steak a bit rare."}
];

app.locals.sayings = messages;

var server = app.listen(3000, function(){
    console.log('listening on port 3000');
});

