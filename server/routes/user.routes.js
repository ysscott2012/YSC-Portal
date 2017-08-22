var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
//var jwtExpress = require('../middlewares/jwt-express');

var User = require('../models/user.js');
//router.use(jwtExpress());



router.post('/filter', function(req, res) {
  var model = { message: "", user: "", success: false, error: "", token: "" }
  console.log(req.body);
  User.find().then((users) => {
      // prevent sending password to client
      // users.forEach(function(element) {
      //     element["password"] = "";
      // }, this);
      res.send(users);
  }, (e) => {
      res.status(400).send(e);
  });
});


module.exports = router;
