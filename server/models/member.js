var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
  groupID: {type: String, default: "-1"},
  userID: {type: String, default: "-1"},
  isApproved: {type: Boolean, default: false},
  isRejected: {type: Boolean, default: false},
  subscriptionDate: {type: String, default: new Date().toJSON()},
  approvalDate: {type: String, default: "-1"},
});

module.exports = mongoose.model('Member', memberSchema);
