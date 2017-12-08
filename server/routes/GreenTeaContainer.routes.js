var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/GreenTeaContainer.service');

var GreenTeaContainer = require('../models/GreenTea_Container');
var _ = require('lodash');

// Token Check before using API
router.use(jwtExpress());

/**
 * find documents based on the filter
 */
router.post('/find', function(req, res) {
  service.find(req.body, function(result){
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
  var newContainer = req.body;
  newContainer.owner = GreenTeaContainer.setOwner(req.body.owner);
  service.save(newContainer, function(result) {
    res.send(result);
  })
});


module.exports = router;
