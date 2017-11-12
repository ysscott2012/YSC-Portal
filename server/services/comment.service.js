const baseService = require('./base.service');
const repository = require('../persistence/comment.repository');

class commentService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new commentService();
