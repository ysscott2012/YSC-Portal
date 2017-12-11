var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
  address1: {type: String, default: ""},
  address2: {type: String, default: ""},
  zip: {type: String, default: ""},
  state: {type: String, default: ""},
  city: {type: String, default: ""},
  country: {type: String, default: ""},
  className: {type: String, defualt: "address"},
}, {_id: false});

module.exports = mongoose.model('Address', addressSchema);
