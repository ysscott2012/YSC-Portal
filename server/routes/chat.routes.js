var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');

var repository = require('../persistence/chat.repository');

// Token Check before using API
router.use(jwtExpress());


router.post('/save', function(req, res) {
  repository.save(req.body, function(result){
    res.json(result);
  });
});



module.exports = router;
