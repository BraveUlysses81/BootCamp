var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var underscore = require('underscore');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/my_database');
var toDoArray = [
    {"description": "Change our data", "completed": true, "id": 1},
    {"description": "Restart server and check postman", "completed": true, "id": 2}
];
app.get('/', function (req,res) {
    res.send("You're home.  Go to the todos.");
});
app.get('/todo', function (req,res) {
    res.json(toDoArray);
});
app.get('/todo/:id', function (req,res) {
    for(i = 0; i < toDoArray.length; i++) {
        if (req.params.id == toDoArray[i].id){
            var item = toDoArray[i];
            res.json(item);
        };
    };
});
// app.get('/todo/:id', function (req,res) {
//  for(i = 0; i < toDoArray.length; i++) {
//      var item = underscore.findWhere(toDoArray, {id: req.params.id});
//      res.json(item);
//  };
// });
// app.get('/', function (req,res) {
//  res.send('')
// });
app.post('/todo', function (req,res) {
    var noo = {"description": req.body.description, "completed": req.body.completed, "id": 3};
    toDoArray.push(noo);
    res.json(noo);
});
// app.put('/', function (req,res) {
//  res.send('')
// });
// app.delete('/', function (req,res) {
//  res.send('')
// });
app.listen(process.env.PORT || 3000, function(){
    console.log('Server running on port 3000.  Enjoy!');
});
