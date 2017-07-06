var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('');
});

app.get('/fruit', function (req, res){
    res.send('Tell me about fruits');
});

app.get('/bankaccount', function (req, res){
    res.send('Let\'s hear about your bank account');
});

app.get('/fruit/:name', function (req, res){
    var fruit = req.params.name;
    res.send('So I take it your favorite fruit is ' + fruit);
});

app.get('/bankaccount/:person/:number', function (req, res){
    var name = req.params.person;
    var num = req.params.number;

    if(num >= 50){
        res.send('So, ' + name + ', I understand you have $' + num + ' in your bank account. Can you loan me some money?');
    }
    else{
        res.send(name + ', do you enjoy living life dangerously on the edge?');
    }

});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
