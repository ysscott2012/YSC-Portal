const baseService = require('./base.service');
const repository = require('../persistence/discussion.repository');

class discussionService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new discussionService();
