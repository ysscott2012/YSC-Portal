var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/user.service');


router.use(jwtExpress());

/**
 * find multiple records
 */
router.post('/find', function(req, res) {
  console.log('user route find method called');
  service.find(req.body, function(result){
    res.send(result);
  })
});

/**
 * find one record
 */
router.post('/findOne', function(req, res) {
  service.findOne(req.body, false, function(result) {
    res.send(result);
  })
})

/**
 * update
 */
router.post('/updateOne', function(req, res) {
  service.findOneAndUpdate(req.body.conditions, req.body.update, req.body.options, function(result) {
    res.send(result);
  })
})


module.exports = router;
