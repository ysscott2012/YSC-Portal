// class baseService {
//   constructor(repository) {
//     this.repository = repository;
//   }
// }

// baseService.prototype = {

//   /**
//    * find documents from DB
//    */
//   find = function (condition, callback) {
//     return this.repository.find(condition, callback);
//   },

//   /**
//    * find one document from DB
//    */
//   findOne = function (condition, createIfNull, callback) {
//     return this.repository.findOne(condition, createIfNull, callback);
//   },

//   /**
//    * find one document and update from DB
//    */
//   findOneAndUpdate = function (conditions, update, options, callback) {
//     return this.repository.findOneAndUpdate(conditions, update, options, callback);
//   },
//   /**
//    * remove document from DB
//    */
//   remove = function (condition, callback) {
//     return this.repository.remove(condition, callback);
//   },


//   /**
//    * save document into DB
//    */
//   save = function (condition, callback) {
//     return this.repository.save(condition, callback);
//   },


//   /**
//    * update doument from DB based on condition
//    */
//   update = function (condition, updates, callback) {
//     return this.repository.update(condition, updates, callback);
//   },

//   test = function (condition, updates, callback) {
//     return this.repository.test(condition, updates, callback);
//   },

// }

// module.exports = baseService;

module.exports = class baseService {

  constructor(repository) {
    this.repository = repository;
  }

  /**
   * find documents from DB
   */
  find(condition, callback) {
    return this.repository.find(condition, callback);
  };

  /**
   * find one document from DB
   */
  findOne (condition, createIfNull, callback) {
    return this.repository.findOne(condition, createIfNull, callback);
  };

  /**
   * find one document and update from DB
   */
  findOneAndUpdate(conditions, update, options, callback) {
    return this.repository.findOneAndUpdate(conditions, update, options, callback);
  }

  /**
   * remove document from DB
   */
  remove (condition) {
    return this.repository.remove(condition);
  };

  /**
   * save document into DB
   */
  save (condition, callback) {
    return this.repository.save(condition, callback);
  };

  /**
   * update doument from DB based on condition
   */
  update (condition, updates, options, callback) {
    return this.repository.update(condition, updates, options, callback);
  };

  /**
   * update doument from DB based on condition
   */
  thisTestFunction (condition, updates, callback) {
    return this.repository.thisTestFunction(condition, updates, callback);
  };
}

