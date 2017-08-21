

var jwt = require('jsonwebtoken');
var securit = require('./securit');
module.exports = function(options) {
  return function(req, res, next) {
    // console.log(req.headers);
    if (req.method != 'GET')
    {
      console.log('protected')
    }
    // Implement the middleware function based on the options object

    // jwt.verify(token, securit(), function(err, decoded) {
    //   console.log(decoded)
    // });

    //console.log(securit()) // #some/url
    next()
  }
}
