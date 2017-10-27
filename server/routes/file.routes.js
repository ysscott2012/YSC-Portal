
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var jwtExpress = require('../middlewares/jwt-express');
var path = require('path');
var service = require('../services/user.service');

var multer = require('multer');
var DIR = '../../src/assets/files/';
var fs = require('fs');

//  we cannot check token for ng2-file-upload http request
/**
 * Check token, if token is not pass, system will stop here.
 */
router.use(jwtExpress());

/* FILES */

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    var folderName = req.headers['authorization'].split(' ')[0]
    var folderPath = path.join(__dirname, DIR + folderName);
    console.log(folderPath);
    if(fs.existsSync(folderPath)) {
      callback(null, folderPath);
    }
    else {
      fs.mkdirSync(folderPath);
      callback(null, folderPath);
    }
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
})

var upload = multer({storage: storage}).array('file', 10);

/**
 * upload files
 */
router.post('/user/profile/upload', function (req, res) {

  var filePath = req.headers.authorization.split(' ')[0];
  if (filePath) {
    console.log('filePath: ' + filePath);
    var userID = filePath.split('/')[1];

    if (userID) {
      console.log('user ID: ' + userID);
      // find user
      service.findOne({'_id' : userID}, null, function(result) {
        if (result.success) {
          var user = result.payload;

          upload(req, res, function (err) {
            if (err) {
              console.log(err)
              return res.send(err.toString());
            }
            var file = req.files[0];
            user.profileImage = '/assets/files/' + filePath + '/' + file.filename;
            user.save();
            console.log('File is uploaded')
            res.send(result);
          });

        }
      })
    }
  }
});


module.exports = router;
