const baseService = require('./base.service');
const userRepository = require('../persistence/user.repository');

class UserService extends baseService {
    constructor() {
        super(userRepository);
    }
}
