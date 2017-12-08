const baseService = require('./base.service');
const repository = require('../persistence/GreenTeaContainer.repository');

class GreenTeaContainerService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new GreenTeaContainerService();
