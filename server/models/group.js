var mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
  name: {type: String, default: ""},
});

module.exports = mongoose.model('Group', groupSchema);
