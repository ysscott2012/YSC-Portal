var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');

var UserSchema = require('../models/user.js');
var IRepository = require('../repositories/IRepository');

// Token Check before using API
router.use(jwtExpress());


router.post('/filter', function(req, res) {
  var model = { message: "", user: "", success: false, error: "", token: "" }
  IRepository.find(UserSchema, req.body, function(result){
    res.send(result);
  })
});


module.exports = router;
