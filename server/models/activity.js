var mongoose = require('mongoose');
var Owner = require('./owner');

var activitySchema = mongoose.Schema({
  browseLink: {type: String, default: ""},
  content: {type: String, default: ""},
  creationDate: {type: String, default: new Date().toJSON()},
  date: {type: String, default: ""},
  owner: {type: Object, default: {}},
  referenceID: {type: String, default: ""},
  referenceType: {type: String, default: ""},
  privacy: {type: String, default: ""},
  type: {type: String, default: ""},
  className: {type: String, default: "activity"}
});

var activity = {
  object: {
    browseLink: '',
    className: 'activity',
    content: '',
    creationDate: new Date().toJSON(),
    date: new Date().toJSON(),
    owner: {},
    referenceID: '',
    referenceType: '',
    privacy: 'public',
    type: '',
  },
  query: {
    getOwnerQuery: function(user) {
      return {'owner.id': user.id}
    }
  },
  schema: mongoose.model('Activity', activitySchema),
  setOwner: function (user) {
    return new Owner(user);
  },
  activity: function (obj, action, includeReference) {
    this.object.content = action;
    this.object.owner = obj.owner;
    // when an activity is a remove action,
    // we don't want to reference it to the activity
    if (includeReference) {
      this.object.referenceID = obj.id;
      this.object.referenceType = obj.className;
    }
    return this.object;
  }

}

module.exports = activity;
//module.exports = mongoose.model('Activity', activitySchema);
