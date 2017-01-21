var User = require('./gooseknee');

var Nancy = User({
    username: 'Nancy',
    age: 22,
    favorite_pizza: 'pepperoni'
});

Nancy.save(function(err){
    if (err) throw err;

    console.log('user created');
});