
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var jwtExpress = require('../middlewares/jwt-express');
var path = require('path');
var service = require('../services/user.service');

var activityService = require('../services/activity.service');
var commentService = require('../services/comment.service');
var containerService = require('../services/GreenTeaContainer.service');
var objectService = require('../services/GreenTeaObject.service');

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
    var userID = filePath.split('/')[1];

    if (userID) {

      upload(req, res, function (err) {
        if (err) {
          return res.send(err.toString());
        }
        var file = req.files[0];
        const condition = {'_id' : userID};
        const ownerCondition = { 'owner.id' : userID};
        const update = { profileImage: '/assets/files/' + filePath + '/' + file.filename}
        const ownerUpdate = { 'owner.profileImage': '/assets/files/' + filePath + '/' + file.filename}
        const options = {multi: true};
        // update user schema
        service.findOneAndUpdate(condition, update, null, function(serviceResult){
          res.send(serviceResult);
          // console.log('update user service');
          // // update activity schema
          // activityService.update(ownerCondition, ownerUpdate, options, function(activityServiceResult){
          //   console.log('update activity service');
          //   // update comment schema
          //   commentService.update(ownerCondition, ownerUpdate, options, function(commentServiceResult){
          //     console.log('update comment service');
          //     // update GreenTeaContainer schema
          //     containerService.update(ownerCondition, ownerUpdate, options, function(containerServiceResult){
          //       console.log('update container service');
          //       // update GreenTeaObject schema
          //       objectService.update(ownerCondition, ownerUpdate, options, function(objectServiceResult){
          //         console.log('update object service');
          //         res.send(objectServiceResult);
          //       });
          //     });
          //   });
          // });
        });
      });


      // find user
      // service.findOne({'_id' : userID}, null, function(result) {
      //   if (result.success) {
      //     var user = result.payload;

      //     upload(req, res, function (err) {
      //       if (err) {
      //         return res.send(err.toString());
      //       }
      //       var file = req.files[0];
      //       user.profileImage = '/assets/files/' + filePath + '/' + file.filename;
      //       user.save();
      //       res.send(result);
      //     });

      //   }
      // })
    }
  }
});


module.exports = router;
