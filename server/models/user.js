var addressSchema = require('./address');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {
      type: String,
      default: "guest@guest.com",
      lowercase: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {type: String, default: ""},
    tempPassword: {type: String, default: ""},
    level: {type: Number, default: 0},
    verified: {type: Boolean, default: false},
    isApproved: {type: Boolean, default: false},
    isRejected: {type: Boolean, default: false},
    since: {type: String, default: ""},
    className: {type: String, defualt: "User"},
    address: {type: addressSchema.schema, default: new addressSchema()},
    routes: { type: [String], default: ["auth", "user"]},
    profileImage: {type: String, defualt: "/assets/files/default/user.jpg"}
});

module.exports = mongoose.model('User', userSchema);
