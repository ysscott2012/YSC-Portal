var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');

// services
var service = require('../services/GreenTeaContainer.service');
var activityService = require('../services/activity.service');
var objectService = require('../services/GreenTeaObject.service');

// classes
var GreenTeaContainer = require('../models/GreenTea_Container');
var activity = require('../models/activity');
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
  // GreenTeaContainer
  var newContainer = req.body;
  newContainer.owner = GreenTeaContainer.setOwner(req.body.owner);
  service.save(newContainer, function(result) {
    if (result.success) {
      // Add activity to the activities collection
      // when container is saved sucessfully
      var action = newContainer.owner.firstName + ' create a ' +
                   newContainer.className + ' - ' +
                   newContainer.name + '.'
      var newActivity = activity.activity(newContainer, action, true);
      activityService.save(newActivity, function(activityResult) {
        if (activityResult.success) {
          console.log('system create an activity in GreenTeaContainer - create a ' + newContainer.className);
        }
      })
      res.send(result);
    }
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

    // Add a record
    var action = req.body.owner.firstName + ' remove a ' +
                 req.body.className + ' - ' +
                 req.body.name + '.'
    var newActivity = activity.activity(req.body, action, false);
    activityService.save(newActivity, function(activityResult) {
      if (activityResult.success) {
        console.log('system create an activity in GreenTeaContainer - remove a ' + req.body.className);
        res.send({success: true});
      }
    })

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
