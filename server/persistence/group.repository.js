
var UserSchema = require('../models/user');
var GroupSchema = require('../models/group');
var MemberSchema = require('../models/member');

var message = require('../models/message');
var error = require('../models/error');


class GroupRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    GroupSchema.find(condition).then((objects) => {
      message.setMessage( true, "Get groups successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get groups failed", [], [error]);
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
    var newObject = new GroupSchema(condition);
    newObject.save(function (err, GroupSchema) {
      if (err) {
        message.setMessage(false, "Create group error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create group successfully", newObject, []);
        callback(message);
      }
    })
  };

  /**
   * update doument from DB based on condition
   */
  update(condition, updates, options, callback) {
  };
}

module.exports = new GroupRepository();
