const baseService = require('./base.service');
const repository = require('../persistence/GreenTeaScore.repository');

class GreenTeaScoreService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new GreenTeaScoreService();
