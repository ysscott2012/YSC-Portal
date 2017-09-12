var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    password: {type: String, default: ""},
    level: {type: String, default: ""},
    verified: {type: Boolean, default: false},
    isApproved: {type: Boolean, default: false},
    isRejected: {type: Boolean, default: false},
    since: {type: String, default: ""}
});

module.exports = mongoose.model('User', userSchema);
