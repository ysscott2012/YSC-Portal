const baseService = require('./base.service');
const repository = require('../persistence/GreenTeaObject.repository');

class GreenTeaObjectService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new GreenTeaObjectService();
