
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(require('./routes/home'));

var server = app.listen(3000, function(){
    console.log('listening on port 3000');
});