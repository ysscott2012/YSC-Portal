var moment = require('moment');
var _ = require('lodash');

var comment = require('../models/comment');
var CommentSchema = comment.schema;

var message = require('../models/message');
var error = require('../models/error');



class CommentRepository {
  /**
   * find documents from DB
   */
  find(condition, callback) {
    console.log(condition);
    CommentSchema.find(condition).then((objects) => {
      objects = _.sortBy(objects, function(o) { return new moment(o.date); }).reverse();
      message.setMessage( true, "Get comments successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get comments failed", [], [error]);
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
    var newObject = new CommentSchema(condition);
    newObject.save(function (err, CommentSchema) {
      if (err) {
        message.setMessage(false, "Create comment error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create comment successfully", newObject, []);
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

module.exports = new CommentRepository();
