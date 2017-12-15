var express = require('express');
var router = express.Router();
var authorization = require('./authorization.controller');

var _ = require('lodash');

const routes = {
  ACTIVITY: '/activity',
  ADMIN: '/admin',
  AUTHENTICATION: '/auth',
  COMMENT: '/comment',
  CONTAINER: '/container',
  OBJECT: '/object',
  SCORE: '/score',
  FILE: '/file',
  USER: '/user',
}

/**
 * Check token for every route
 */
router.post('*', function(req, res, next) {
  if (req.url.indexOf(routes.AUTHENTICATION) === -1) {

    // check token
    console.log('Checking token');

    authorization(req.headers, function(tokenResult) {
      if (tokenResult.success) {
        console.log('Success')
        next()
      } else {
        console.log('Failed')
        res.send(tokenResult);
      }
    });

  } else {
    // do not check token
    console.log('Not checking token')
    next();
  }

});


module.exports = router;
