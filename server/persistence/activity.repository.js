var moment = require('moment');
var _ = require('lodash');

var activity = require('../models/activity');
var ActivitySchema = activity.schema;

var message = require('../models/message');
var error = require('../models/error');



class ActivityRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    ActivitySchema.find(condition).then((objects) => {
      objects = _.sortBy(objects, function(o) { return new moment(o.date); }).reverse();
      message.setMessage( true, "Get activitys successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get activitys failed", [], [error]);
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
    var newObject = new ActivitySchema(condition);
    newObject.save(function (err, ActivitySchema) {
      if (err) {
        message.setMessage(false, "Create activity error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create activity successfully", newObject, []);
        callback(message);
      }
    })
  };

  /**
   * update doument from DB based on condition
   */
  update(condition, updates, options, callback) {
    ActivitySchema.update(condition, updates, options, function(err, object) {
      if (err) {
        message.setMessage( false, "Update activities error", null, []);
        callback(message);
      } else {
        message.setMessage( true, "Update activities successfully", object, []);
        callback(message);
      }
    })
  };
}

module.exports = new ActivityRepository();
