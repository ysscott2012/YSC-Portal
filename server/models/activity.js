var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
  browseLink: {type: String, default: ""},
  content: {type: String, default: ""},
  creationDate: {type: String, default: new Date().toJSON()},
  date: {type: String, default: ""},
  owner: {type: Object, default: {}},
  privacy: {type: String, default: ""},
  type: {type: String, default: ""}
});

var activity = {
  getOwner: function() {
    return this.owner;
  },
  owner: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    level: '',
    profileImage: ''
  },
  query: {
    getOwnerQuery: function(user) {
      return {'owner.id': user.id}
    }
  },
  schema: mongoose.model('Activity', activitySchema),
  setOwner: function (user) {
    this.owner.id = user.id;
    this.owner.email = user.email;
    this.owner.firstName = user.firstName;
    this.owner.lastName = user.lastName;
    this.owner.level = user.level;
    this.owner.profileImage = user.profileImage;
    return this.owner;
  }
}

module.exports = activity;
//module.exports = mongoose.model('Activity', activitySchema);
