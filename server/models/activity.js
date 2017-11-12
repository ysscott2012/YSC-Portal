var mongoose = require('mongoose');
var Owner = require('./owner');

var activitySchema = mongoose.Schema({
  browseLink: {type: String, default: ""},
  content: {type: String, default: ""},
  creationDate: {type: String, default: new Date().toJSON()},
  date: {type: String, default: ""},
  owner: {type: Object, default: {}},
  privacy: {type: String, default: ""},
  type: {type: String, default: ""},
  className: {type: String, default: "Activity"}
});

var activity = {
  query: {
    getOwnerQuery: function(user) {
      return {'owner.id': user.id}
    }
  },
  schema: mongoose.model('Activity', activitySchema),
  setOwner: function (user) {
    return new Owner(user);
  }
}

module.exports = activity;
//module.exports = mongoose.model('Activity', activitySchema);
