
var UserSchema = require('../models/user');
var message = require('../models/message');
var error = require('../models/error');

class UserRepository {

  /**
   * find documents from DB
   */
  find(condition, callback) {
    UserSchema.find(condition).then((objects) => {
      message.setMessage( true, "Get users successfully", objects, []);
      callback(message)
    }, (e) => {
      error.setError(200);
      message.setMessage( false, "Get users failed", [], [error]);
      callback(message);
    });
  };

  /**
   * find one document from DB
   */
  findOne(condition, createIfNull, callback) {
    UserSchema.findOne(condition, function (err, object) {
      if (object) {
        message.setMessage( true, "Get user successfully", object, []);
        callback(message);
      }
      else {
        if (createIfNull) {
          this.save(condition, function (result) {
            callback(result);
          })
        }
        else {
          error.setError(200);
          message.setMessage( false, "Get user failed", null, [error]);
          callback(message);
        }
      }
    })
  };

  /**
   * find one document and update from DB
   */
  findOneAndUpdate(conditions, update, options, callback) {
    UserSchema.findOneAndUpdate(conditions, update, options, function(err, doc, res) {
      //console.log(doc)
      if (err) {
        error.setError(101);
        message.setMessage(false, "Update user error in MongoDB", null, [error] )
        callback(message);
      }
      else {
        if (doc) {
          message.setMessage(true, "Update user successfully", doc,  [])
          callback(message);
        }
        else {
          error.setError(101);
          message.setMessage(false, "Update user error; can\'t find user", null, [error])
          callback(message);
        }
      }
    })
  }

  /**
   * remove document from DB
   */
  remove(condition) {
    // UserSchema.remove(condition, function(err){
    //   if (err) {
    //     message.setMessage(false, "remove user error", null, []);
    //     callback(message);
    //   }
    //   else {
    //     message.setMessage(true, "remove user successfully", null, []);
    //     callback(message);
    //   }
    // })
  };

  /**
   * save document into DB
   */
  save(condition, callback) {
    var newObject = new UserSchema(condition);
    newObject.save(function (err, UserSchema) {
      if (err) {
        message.setMessage(false, "Create user error in MongoDB", null, []);
        callback(message);
      }
      else {
        message.setMessage(true, "Create user successfully", newObject, []);
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

module.exports = new UserRepository();
