// employment of required packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('underscore');
var $ = require('jquery');
var cors = require('cors');

var server = express();

// an array that holds just four items of data to use for testing purposes and the construction of the array
var toDoArray = [];

function ToDoItem(id, description, completed){
    this.id = id;
    this.description = description;
    this.completed = completed;
}

var item1 = new ToDoItem(1, 'buy food and clothes', true);
var item2 = new ToDoItem(2, 'wash car', false);
var item3 = new ToDoItem(3, 'finish project', false);
var item4 = new ToDoItem(4, 'eat breakfast', true);

toDoArray.push(item1);
toDoArray.push(item2);
toDoArray.push(item3);
toDoArray.push(item4);

// toDoArray = JSON.stringify(toDoArray);

exports.data = toDoArray;

// set up the views engine and direct it to the correct folder
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// enable to parse json objects from requests
server.use(bodyParser.json());

// direct the server to the static resources
//server.use(express.static('public'));
server.use(express.static(path.join(__dirname, 'public')));

//enable cross origin resource sharing
server.use(cors());

// create routes for the various get requests to the server
server.get('/', function(req, res){
    res.send('This is the root of a \'To-do\' List Application. Please go to /todos to begin use');
});

server.get('/todos', function(req, res){
    console.log(toDoArray);
    res.json(toDoArray);
});

server.get('/todos/:id', function(req, res){
    var item;
    for (i = 0; i < toDoArray.length; i++){
        if(parseInt(req.params.id) === toDoArray[i].id){
            item = toDoArray[i]
            res.json(item);
        }
    }
    if(typeof item == 'undefined'){
        res.status(418).send('There was no item found with your \'id\' and you\'re a teapot!');
    }
});

server.post('/todos', function(req, res){
    var last = toDoArray[toDoArray.length - 1].id + 1;
    var allowed = _.pick(req.body, 'description'/*, 'completed'*/);
    if(_.isString(allowed.description) /*&& _.isBoolean(allowed.completed)*/
        && allowed.description.length > 0) {
        var item = {
            "id": last,
            "description": allowed.description.trim(),
            "completed": false
        }

        toDoArray.push(item);
        //res.send('Your item has been added to the list');
        console.log(toDoArray);
        res.json(item);
    }

    else{
        res.status(405).send('Your list item must be a word or series of words with a length greater than zero!');
    }
});

server.delete('/todos/:id', function(req, res){
    console.log(req.params.id);
    if(_.isFinite(parseInt(req.params.id)) && parseInt(req.params.id) > 0) {
        var item = _.findWhere(toDoArray, {id: parseInt(req.params.id)});
        console.log(item);
        if (item) {
            toDoArray = _.filter(toDoArray, function (i) {
                return i.id != req.params.id;
            });
        console.log(toDoArray);
        res.json(item);
        }
        else{
            res.status(417).send('There was no item found with your \'id\'');
        }
    }
    else{
       res.status(418).send('Come on, get a real \'id\' number instead of this garbage, ' + req.params.id);
    }
});

server.put('/todos/:id', function(req, res){
    console.log(req.params.id);
    if(_.isFinite(parseInt(req.params.id)) && parseInt(req.params.id) > 0) {
        var item = _.findWhere(toDoArray, {id: parseInt(req.params.id)});
        if (typeof item != 'undefined') {
            if(item.completed === true){
                item.completed = false;
            }
            else{
                item.completed = true;
            }
            console.log(toDoArray);
            res.json(item);
        }
        else{
            res.status(418).send('There was no item found with your \'id\'');
        }
    }
    else{
        res.status(418).send('Come on, get a real \'id\' number instead of this garbage, ' + req.params.id);
    }
});

// tell the server where to be listening for requests
server.listen(process.env.PORT || 3000, function(){
    console.log('Server has started');
});

//module.exports = toDoArray;
module.exports = server;


