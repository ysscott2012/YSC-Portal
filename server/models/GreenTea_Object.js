var mongoose = require('mongoose');
var Owner = require('./owner');
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
  owner: { type: Object, defult: {} },
  position: {type: Number, default: -1},
  referenceID: {type: String, default: ''},
  referenceType: {type: String, default: ''},
  value: {type: String, default: ''},
})

var schemaModel = mongoose.model('GreenTeaObject', objectSchema);

var GreenTeaObject = {
  schema: schemaModel,
  setOwner: function (user) {
    return new Owner(user);
  }
}

module.exports = GreenTeaObject;

