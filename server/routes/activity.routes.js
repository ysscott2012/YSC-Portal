var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/activity.service');

var activity = require('../models/activity');

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
  console.log("find activities by owner");
  const query = activity.query.getOwnerQuery(req.body.owner);
  console.log(query);
  service.find(query, function(result){
    res.send(result);
  })
});

/**
 * Save a new record
 */
router.post('/save', function(req, res) {
  console.log(req.body)

  service.save(req.body, function(result) {
    res.send(result);
  })
});


module.exports = router;
