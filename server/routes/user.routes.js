var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var jwtExpress = require('../middlewares/jwt-express');

var User = require('../models/user.js');
router.use(jwtExpress());

module.exports = router;
