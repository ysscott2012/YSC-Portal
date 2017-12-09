var mongoose = require('mongoose');
var Owner = require('./owner');
var Schema = mongoose.Schema;

var ContainerSchema = new Schema({
  creationDate: { type: String, defult: '' },
  className: { type: String, defult: '' },
  greenTeaObjects: { type: [Object], defult: [] },
  owner: { type: Object, defult: {} },
  name: { type: String, defult: ''},
  privacy: { type: String, default: 'public'},
  referenceID: { type: String, defult: '' },
  referenceType: { type: String, defult: '' },

})

var schemaModel = mongoose.model('GreenTeaContainer', ContainerSchema);

var GreenTeaContainer = {
  schema: schemaModel,
  setOwner: function (user) {
    return new Owner(user);
  }
}

module.exports = GreenTeaContainer;
