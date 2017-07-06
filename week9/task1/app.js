var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/contact'));

var server = app.listen(3000, function(){
    console.log('listening on port 3000');
});