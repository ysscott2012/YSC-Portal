var mongoose = require('mongoose');
var User = require('./user');

var historySchema = mongoose.Schema({
  date: String,
  user: {
    firstName: String,
    lastName: String,
    email: String
  },
  action: String
});

module.exports = mongoose.model('History', historySchema);
