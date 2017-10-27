const baseService = require('./base.service');
const repository = require('../persistence/member.repository');

class MemberService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new MemberService();
