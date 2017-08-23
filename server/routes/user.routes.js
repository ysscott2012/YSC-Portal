var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');

var User = require('../models/user.js');

// Token Check before using API
router.use(jwtExpress());

router.post('/filter', function(req, res) {
  var model = { message: "", user: "", success: false, error: "", token: "" }
  User.find(req.body).then((users) => {
      // prevent sending password to client
      users.forEach(function(element) {
          element["password"] = "";
      }, this);
      res.send(users);
  }, (e) => {
      res.status(400).send(e);
  });
});


module.exports = router;
