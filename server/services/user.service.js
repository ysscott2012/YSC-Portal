const baseService = require('./base.service');
const repository = require('../persistence/user.repository');

class UserService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new UserService();
