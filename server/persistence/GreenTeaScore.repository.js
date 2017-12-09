var moment = require('moment');
var _ = require('lodash');

var greenTeaScore = require('../models/GreenTea_Score');
var Schema = greenTeaScore.Schema;

var message = require('../models/message');
var error = require('../models/error');



class GreenTeaScoreRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    console.log(condition);
    Schema.find(condition).then((objects) => {
      objects = _.sortBy(objects, function(o) { return new moment(o.date); }).reverse();
      message.setMessage( true, "Get scores successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get scores failed", [], [error]);
      callback(message);
    });
  };

  /**
   * find one document from DB
   */
  findOne(condition, createIfNull, callback) {

  };

  /**
   * find one document and update from DB
   */
  findOneAndUpdate(conditions, update, options, callback) {

  }

  /**
   * remove document from DB
   */
  remove(condition) {

  };

  /**
   * save document into DB
   */
  save(condition, callback) {
    var newObject = new Schema(condition);
    newObject.save(function (err, Schema) {
      if (err) {
        message.setMessage(false, "Create score error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create score successfully", newObject, []);
        callback(message);
      }
    })
  };

  /**
   * update doument from DB based on condition
   */
  update(condition, updates, callback) {
  };
}

module.exports = new GreenTeaScoreRepository();
