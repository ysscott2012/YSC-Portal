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
  remove (condition, callback) {
    return this.repository.remove(condition, callback);
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
  update (condition, updates, callback) {
    return this.repository.update(condition, updates, callback);
  };
}

