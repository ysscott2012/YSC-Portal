var moment = require('moment');
var _ = require('lodash');

var greenTeaContainer = require('../models/GreenTea_Container');
var Schema = greenTeaContainer.schema;

var message = require('../models/message');
var error = require('../models/error');



class GreenTeaContainerRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    Schema.find(condition).then((objects) => {
      objects = _.sortBy(objects, function(o) { return new moment(o.date); }).reverse();
      message.setMessage( true, "Get containers successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get containers failed", [], [error]);
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
    Schema.findOneAndUpdate(conditions, update, options, function(err, object) {
      if (err) {
        message.setMessage( false, "Update container error", null, []);
        callback(message);
      } else {
        message.setMessage( true, "Update container successfully", object, []);
        callback(message);
      }
    })
  }

  /**
   * remove document from DB
   */
  remove(condition) {
    Schema.remove(condition, function (err) {
      if (err) return handleError(err);
    })
  };

  /**
   * save document into DB
   */
  save(condition, callback) {
    var newObject = new Schema(condition);
    newObject.save(function (err, Schema) {
      if (err) {
        message.setMessage(false, "Create container error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create container successfully", newObject, []);
        callback(message);
      }
    })
  };

  /**
   * update doument from DB based on condition
   */
  update(condition, updates, options, callback) {
    Schema.update(condition, updates, options, function(err, object) {
      if (err) {
        message.setMessage( false, "Update containers error", null, []);
        callback(message);
      } else {
        message.setMessage( true, "Update containers successfully", object, []);
        callback(message);
      }
    })
  };

}

module.exports = new GreenTeaContainerRepository();
