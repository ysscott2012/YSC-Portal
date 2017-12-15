var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var service = require('../services/GreenTeaScore.service');

var GreenTeaScore = require('../models/GreenTea_Score');
var _ = require('lodash');

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
});


module.exports = router;
