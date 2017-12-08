var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContainerSchema = new Schema({
  creationDate: { type: String, defult: '' },
  className: { type: String, defult: '' },
  greenTeaObjects: { type: [Object], defult: [] },
  owner: { type: Object, defult: {} },
  referenceID: { type: String, defult: '' },
  referenceType: { type: String, defult: '' },

})

var schemaModel = mongoose.model('GreenTeaContainer', ContainerSchema);

var GreenTeaContainer = {
  Schema: schemaModel
}

module.exports = GreenTeaContainer;
