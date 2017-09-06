var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var repository = require('../persistence/user.repository');

// Token Check before using API
router.use(jwtExpress());


router.post('/find', function(req, res) {
  repository.find(req.body, function(result){
    res.send(result);
  })
});

router.post('/findOne', function(req, res) {
  repository.findOne(req.body, false, function(result) {
    res.send(result);
  })
})

router.post('/updateOne', function(req, res) {
  repository.findOneAndUpdate(req.body.conditions, req.body.update, req.body.options, function(result) {
    res.send(result);
  })
})


module.exports = router;
