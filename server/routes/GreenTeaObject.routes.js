var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/GreenTeaObject.service');

var GreenTeaObject = require('../models/GreenTea_Object');
var _ = require('lodash');

// Token Check before using API
router.use(jwtExpress());

/**
 * find documents based on the filter
 */
router.post('/find', function(req, res) {
  service.find(req.body, function(result){
    // sort by position
    result.payload = _.sortBy(result.payload, 'position');
    res.send(result);
  })
});

/**
 * find documents based on owner;
 */
router.post('/findByOwner', function(req, res) {
});

/**
 * Save a new record
 */
router.post('/save', function(req, res) {
  var newObject = req.body;
  newObject.owner = GreenTeaObject.setOwner(req.body.owner);
  service.save(newObject, function(result) {
    res.send(result);
  })
});


module.exports = router;
