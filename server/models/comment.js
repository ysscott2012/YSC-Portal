var mongoose = require('mongoose');
var Owner = require('./owner');


var commentSchema = mongoose.Schema({
  referenceType: {type: String, default: ""},
  referenceID: {type: String, default: ""},
  content: {type: String, default: ""},
  creationDate: {type: String, default: new Date().toJSON()},
  owner: {type: Object, default: {}},
  tag: {type: [Object], default: []},
  className: {type: String, default: "Comment"}
});

var comment = {
  query: {
    getActivityQuery: function(activity) {
      return {
        '$and': [
          { 'referenceID' : activity.id },
          { 'referenceType' : activity.className }
        ]
      }
    }
  },
  schema: mongoose.model('Comment', commentSchema),
  setOwner: function (user) {
    return new Owner(user);
  }
}

module.exports = comment;
//module.exports = mongoose.model('Activity', activitySchema);
