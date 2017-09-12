
var UserSchema = require('../models/user');
var irepository = require('../persistence/irepository');

class UserRepository extends irepository {

  /**
   * find documents from DB
   */
  find(condition, callback) {
    UserSchema.find(condition).then((objects) => {
      callback({ message: 'get users successfully', success: true, data: objects })
    }, (e) => {
      callback({ message: 'get users error', success: false, data: [] })
    });
  };

  /**
   * find one document from DB
   */
  findOne(condition, createIfNull, callback) {
    UserSchema.findOne(condition, function (err, object) {
      if (object) {
        callback({ message: 'Get user successfully', success: true, data: object });
      }
      else {
        if (createIfNull) {
          this.save(condition, function (result) {
            callback(result);
          })
        }
        else {
          callback({ message: 'Get user error', success: false, data: null });
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
        callback({ message: 'Update user error in MongoDB', success: false, data: null });
      }
      else {
        if (doc) {
          callback({ message: 'Update user successfully', success: true, data: doc });
        }
        else {
          callback({ message: 'Update user error; can\'t find user', success: false, data: null });
        }
      }
    })
  }

  /**
   * remove document from DB
   */
  remove(condition, callback) {
    UserSchema.remove(condition, function(err){
      if (err) callback({ message: 'remove user error', success: false, data: null });
      else callback({ message: 'remove user successfully', success: true, data: null })
    })
  };

  /**
   * save document into DB
   */
  save(condition, callback) {
    var newObject = new UserSchema(condition);
    newObject.save(function (err, UserSchema) {
      if (err) {
        callback({ message: 'Create user error in MongoDB', success: false, data: null });
      }
      else {
        callback({ message: 'Create user successfully', success: true, data: newObject });
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
