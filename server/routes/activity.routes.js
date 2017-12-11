var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/activity.service');

var activity = require('../models/activity');
var _ = require('lodash');

// Token Check before using API
router.use(jwtExpress());

/**
 * find documents based on the filter
 */
router.post('/find', function(req, res) {
  console.log("find all activities");
  service.find(req.body, function(result){
    res.send(result);
  })
});

/**
 * find documents based on owner;
 */
router.post('/findByOwner', function(req, res) {
  const query = activity.query.getOwnerQuery(req.body.owner);
  const currentIndex = req.body.currentIndex;
  const amount = req.body.amount;
  service.find(query, function(result){
    var objects = result.payload;
    var end = currentIndex + amount > objects.length ? currentIndex + amount : objects.length;
    objects = _.slice(objects, currentIndex, currentIndex + amount);
    result.payload = objects;
    res.send(result);
  })
});

/**
 * Save a new record
 */
router.post('/save', function(req, res) {
  console.log(req.body)
  req.body.owner = activity.setOwner(req.body.owner);
  service.save(req.body, function(result) {
    res.send(result);
  })
});


module.exports = router;
