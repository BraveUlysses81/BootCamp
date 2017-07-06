var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
    console.log('the server is listening on 3000')
});
