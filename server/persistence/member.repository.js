
var UserSchema = require('../models/user');
var GroupSchema = require('../models/group');
var MemberSchema = require('../models/member');

var message = require('../models/message');
var error = require('../models/error');

class MemberRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    MemberSchema.find(condition).then((objects) => {
      message.setMessage( true, "Get members successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get members failed", [], [error]);
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
  remove(condition, callback) {

  };

  /**
   * save document into DB
   */
  save(condition, callback) {
    var newObject = new MemberSchema(condition);
    newObject.save(function (err, MemberSchema) {
      if (err) {
        message.setMessage(false, "Create member error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create member successfully", newObject, []);
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

module.exports = new MemberRepository();
