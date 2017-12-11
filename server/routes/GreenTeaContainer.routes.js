var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/GreenTeaContainer.service');
var objectService = require('../services/GreenTeaObject.service');

var GreenTeaContainer = require('../models/GreenTea_Container');
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
  var newContainer = req.body;
  newContainer.owner = GreenTeaContainer.setOwner(req.body.owner);
  service.save(newContainer, function(result) {
    res.send(result);
  })
});

/**
 * Remove
 */
router.post('/remove', function(req, res) {
  if (global.current._id === req.body.owner.id) {
    var selectedContainer = {
      '_id': req.body.id
    }
    var referenceCondition = {
      '$and': [ {referenceID: req.body.id}, {referenceType: req.body.className} ]
    }
    // remove all referenced containers
    service.remove(referenceCondition);
    // remove all referenced objects
    objectService.remove(referenceCondition);
    // remove selected container
    service.remove(selectedContainer);
    res.send({success: true});
  }
})

/**
 * Update one
 */
router.post('/updateOne', function(req, res) {
  service.findOneAndUpdate(req.body.condition, req.body.update, req.body.option, function(result) {
     res.send(result);
  })
})


module.exports = router;
