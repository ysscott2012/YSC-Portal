var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    level: String,
    verified: Boolean,
    since: String
});

module.exports = mongoose.model('User', userSchema);
