var mongoose = require('mongoose');

var preferencesSchema = mongoose.Schema({
    theme: {type: String, default: '#5d84b3' },
    fontSize: {type: String, default: '16px' },
    scale: {type: Number, default: 1 }
}, { _id : false });

module.exports = mongoose.model('Preferences', preferencesSchema);
