var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');


// Token Check before using API
router.use(jwtExpress());


router.post('/collections', function(req, res) {

});

module.exports = router;
