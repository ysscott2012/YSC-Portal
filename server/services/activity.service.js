const baseService = require('./base.service');
const repository = require('../persistence/activity.repository');

class activityService extends baseService {
    constructor() {
        super(repository);
    }
}

module.exports = new activityService();
