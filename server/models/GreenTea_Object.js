var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var objectSchema = new Schema({
  amount: { type: Number, default: -1 },
  className: {type: String, default: ''},
  creationDate: {type: String, default: ''},
  description: {type: String, default: ''},
  endDate: {type: String, default: ''},
  startDate: {type: String, default: ''},
  status: {type: String, default: ''},
  name: {type: String, default: ''},
  owner: {type: String, default: ''},
  value: {type: String, default: ''},
})

var schemaModel = mongoose.model('GreenTeaObject', objectSchema);

var GreenTeaObject = {
  Schema: schemaModel
}

module.exports = GreenTeaObject;

