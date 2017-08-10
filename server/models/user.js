var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    accessLevel: Number
});

module.exports = mongoose.model('User', userSchema);
