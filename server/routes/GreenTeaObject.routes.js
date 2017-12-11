var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');

// services
var service = require('../services/GreenTeaObject.service');
var activityService = require('../services/activity.service');

// classes
var GreenTeaObject = require('../models/GreenTea_Object');
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
  var newObject = req.body;
  newObject.owner = GreenTeaObject.setOwner(req.body.owner);
  service.save(newObject, function(result) {
    if (result.success) {
      // Add activity to the activities collection
      // when container is saved sucessfully
      var action = newObject.owner.firstName + ' create a ' +
                   newObject.className + ' - ' +
                   newObject.name + '.'
      var newActivity = activity.activity(newObject, action, true);
      activityService.save(newActivity, function(activityResult) {
        if (activityResult.success) {
          console.log('system create an activity in GreenTeaObject - create a ' + newObject.className);
        }
      })
    }
    res.send(result);
  })
});

/**
 * Remove
 */
router.post('/remove', function(req, res) {
  if (global.current._id === req.body.owner.id) {
    var selectedObject = {
      '_id': req.body.id
    }
    // remove all referenced containers
    service.remove(selectedObject);

    // Add a record
    var action = req.body.owner.firstName + ' remove a ' +
                 req.body.className + ' - ' +
                 req.body.name + '.'
    var newActivity = activity.activity(req.body, action, false);
    activityService.save(newActivity, function(activityResult) {
    if (activityResult.success) {
        console.log('system create an activity in GreenTeaObject - remove a ' + req.body.className);
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
