var mongoose = require('mongoose');

var relationshipSchema = mongoose.Schema({
  fromID: {type: String, default: ""},
  fromClass:  {type: String, default: ""},
  toID: {type: String, default: ""},
  toClass: {type: String, default: ""},
  className: {type: String, defualt: "Relationship"},
}, {_id: false});

module.exports = mongoose.model('relationship', relationshipSchema);
