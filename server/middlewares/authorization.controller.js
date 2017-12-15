
var jwt = require('jsonwebtoken');
var message = require('../models/message');
var securit = require('./securit');

module.exports = function(headers, callback) {
  if (headers.hasOwnProperty('authorization'))
  {
    var token = headers['authorization'].split(' ')[1];
    if (token != 'null') {
      jwt.verify(token, securit(), function(err, decoded) {
        if (err) {
          message.setMessage(false, "Token Expired", null, []);
          callback(message);
        } else {
          var decoded = jwt.decode(token);
          global.current = decoded.user;
          message.setMessage(true, "Login in", null, decoded.user);
          callback(message);
        }
      });
    } else {
      message.setMessage(false, "Token is Null", null, []);
      callback(message);
    }
  } else {
    message.setMessage(false, "Token Failed", null, []);
    callback(message);
  }
}
