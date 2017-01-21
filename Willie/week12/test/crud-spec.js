//employment of needed packages
var supertest = require('supertest');
var app = require('../server.js');
var _ = require('underscore');

// Testing of the POST routes
describe('POST /todos', function(){
    it('1.1  should return a 200 status code, json and all insert an item into the toDoArray', function(done){
        var todoitem = { description : 'new task', completed : false};
        supertest(app)
            .post('/todos')
            .set('Accept', 'application/json')
            .send(todoitem)
            .expect(200, {
                description : 'new task',
                completed : false,
                id : 5
            })
            .expect('Content-Type', /json/, done)
        });

    it('1.2  should return a 200 status code and trimmed description', function (done) {
        supertest(app)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "    new item     ", completed: true})
            .expect(200)
            .expect(function (res) {
                if(res.body.description.length != 8) {
                    throw new Error('Description length is wrong')
                }
            })
            .end(done);
    });

    it('1.3  should return a 200 status code and a filtered version of the item', function(done){
        supertest(app)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "new item", completed: true, confirmed_kills: 10})
            .expect(200)
            .expect(function (res){
                if((_.keys(res.body)) == ["description", "completed", "confirmed_kills"]) {
                    throw new Error('You have too many Keys!')
                }
            })
            .end(function(){
                done();
            })
    });

    it('1.4  should return a 403 status code and a message requesting that all proper keys are included', function(done){
        supertest(app)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({completed: false})
            .expect(403, 'Your list item must be a word or series of words with a length greater than zero!', done);
    });

        it('1.5  should return a 403 status code and an error', function(done){
            supertest(app)
                .post('/todos')
                .set('Accept', 'application/json')
                .send({description: "", completed: true})
                .expect(403, 'Your list item must be a word or series of words with a length greater than zero!', done);
        });

});

// Testing of the GET routes
describe('GET /', function(){
    it('2.1  should return a 200 status code and html', function(done){
        supertest(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, 'This is the root of a \'To-do\' List Application. Please go to /todos to begin use', done);
    });

    it('2.2  should return a 200 status code, json and all of the items in the list array', function(done){
        //var toDos = [{ description : 'new task', completed : false}, { description : 'second task', completed : false},
            //{ description : 'task number 3', completed : true}];
        var toDos = data;
        supertest(app)
            .get('/todos')
            //.send(toDos)
            .expect('Content-Type', /json/)
            .expect(200, toDos, done);
    });

    it('2.3  should return a 200 status code, json and the id=i item', function(done){
        supertest(app)
            .get('/todos/1')
            .expect('Content-Type', /json/)
            .expect(200, {
                id : 1,
                description : 'buy food and clothes',
                completed : true
            }, done);
    });

    it('2.4  should return a 418 status code, and an html/text message', function(done){
        supertest(app)
        .get('/todos/9')
            .expect('Content-Type', /html/)
            .expect(418, 'There was no item found with your \'id\' and you\'re a teapot!', done);
    });


/*//Testing of the PUT routes
describe('PUT /todos/:id', function() {
    it('should return a 200 status code, json and all the todos items', function (done) {
        supertest(app)
            .put('/todos/:1')
            .expect(function (res) {
                if (res.body.completed === true) {
                    throw new Error('Your toggle feature stinks!');
                }
                else{
                    supertest(app)
                        .expect('Content-Type', /json/)
                        .expect(200, {
                            id : 1,
                            description : 'buy food and clothes',
                            completed : false
                        })
                        .end(function(err, res){
                            done();
                        });
                }
            });
    });*/

    /*it('should return a 200 status code, json and all the todos items', function (done) {
        supertest(app)
            .put('/todos/:id')
            .expect('Content-Type', /json/)
            .send({description: "new item", completed: false})
            .expect(200, done)
            .expect(function (res) {
                if (res.body.completed === false) {
                    throw new Error('Your toggle feature stinks!')
                }
            });
    });*/

    /*it('should return a 404 status code, with a message telling that the item is not valid', function (done) {
        supertest(app)
            .put('/todos/:5')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect(function (res) {
                var item = _.findWhere(app.data, {id: 10});
                if (typeof item == 'undefined') {
                    res.status(404);
                    throw new Error('Your toggle feature stinks!')
                }
            });
    });*/
});

//running delete without passing an item doesn't delete all items

/*//test to check if delete with an invalid id will return an error
describe('DELETE /todos/:id', function(){
    it('should return a 404 status code, with a message telling that the item is not valid', function(done){
        supertest(app)
            .delete('/todos/:5')
            .expect(200, done)
            .expect(function (res) {
                var item = _.findWhere(app.data, {id : 5});
                if(typeof item == 'undefined') {
                    res.status(404);
                    throw new Error('Your toggle feature stinks!')
                }
            });
    });
});*/

/*//test to run a valid id in a delete request
describe('DELETE /todos/:id', function(){
    it('should return a 200 status code, indicating a proper deletion success', function(done){
        supertest(app)
            .delete('/todos/:3')
            .expect(200, done)
    });
});*/

/*it('1.1  should return a 200 status code, json and all insert an item into the toDoArray', function(done){
    var todoitem = { description : 'new task', completed : false};
    supertest(app)
        .post('/todos')
        .set('Accept', 'application/json')
        .send(todoitem)
        .expect(200, {
            description : 'new task',
            completed : false,
            id : 6
        })
        .expect('Content-Type', /json/)
        .end(function(err, res){
            //if(err) {done(err)}
            // you can do stuff with res here
            if( err ||res.body.description.length > 20){
                var e = new Error('Desc is too long')
                //throw new Error('Description is too long')
                done(e);
            }
        });
});*/


