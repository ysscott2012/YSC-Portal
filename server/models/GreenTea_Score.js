var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Owner = require('./owner');

var ScoreSchema = new Schema({
  creationDate: { type: String, default: ''},
  className: { type: String, default: ''},
  owner: { type: Object, default: {}},
  point: { type: Number, default: -1},
  referenceID: { type: String, default: ''},
  referenceType: { type: String, default: ''},
})

var schemaModel = mongoose.model('GreenTeaScore', ScoreSchema);

var GreenTeaScore = {
  Schema: schemaModel
}

module.exports = GreenTeaScore;
