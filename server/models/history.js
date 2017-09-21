var mongoose = require('mongoose');
var User = require('./user');

var historySchema = mongoose.Schema({
  date: {type: String, default: new Date().toJSON()},
  user: {
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String, default: ""}
  },
  action: {type: String, default: ""},
  className: {type: String, defualt: "History"},
});

module.exports = mongoose.model('History', historySchema);
