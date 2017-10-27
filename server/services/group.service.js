const baseService = require('./base.service');
const repository = require('../persistence/group.repository');

class GroupService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new GroupService();
