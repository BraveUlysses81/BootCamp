var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app_users');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    age: Number,
    favorite_pizza: String,
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;
