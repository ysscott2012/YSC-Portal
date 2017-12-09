var DiscussionSchema = require('../models/discussion');

var message = require('../models/message');
var error = require('../models/error');

class DiscussionRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    DiscussionSchema.find(condition).then((objects) => {
      message.setMessage( true, "Get discussions successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get discussions failed", [], [error]);
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
    var newObject = new DiscussionSchema(condition);
    newObject.save(function (err, DiscussionSchema) {
      if (err) {
        message.setMessage(false, "Create discussion error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create discussion successfully", newObject, []);
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

module.exports = new DiscussionRepository();
