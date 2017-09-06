

class irepository {

  /**
   * find documents from DB
   */
  find(condition, callback) {
  };

  /**
   * find one document from DB
   */
  findOne (condition, createIfNull, callback) {
  };

  /**
   * find one document and update from DB
   */
  findOneAndUpdate(conditions, update, options, callback) {
  }

  /**
   * remove document from DB
   */
  remove (condition, callback) {
  };

  /**
   * save document into DB
   */
  save (condition, callback) {

  };

  /**
   * update doument from DB based on condition
   */
  update (condition, updates, callback) {
  };

}


module.exports = irepository;
