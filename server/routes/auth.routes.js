var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user.js');

// 
//  Login API
//
router.post('/login', function(req, res) {
    var model = { message: "", user: "", success: false, error: "", token: "" }
    var SQL = {email: req.body.email};
    User.findOne(SQL, function(err, user){
        if (err)
        {
            model.message = "Login Failed, An error occurred.";
            model.error = err;
            res.json(model);
            return
        }
        
        if (!user)
        {
            model.message = "Login Failed, user information is not in the system.";
            res.json(model);
            return
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) 
        {
            model.message = "Login Failed, invaild user email address of password.";
            res.json(model);
            return;
        }

        var token = jwt.sign({user: user}, 'ysAwesome', {expiresIn: 3600});
        model.message = "Successfully logged in";
        model.user = user;
        model.token = token;
        model.success = true;
        res.json(model);
    });
})


//
//  Register a new user
//
router.post('/signup', function(req, res) {

    var newUser = new User(req.body);
    var model = { message: "", user: "", success: false, error: "", token: "" }
    var SQL = {email: req.body.email};

    newUser.password = bcrypt.hashSync(req.body.password, 10);

    User.findOne(SQL, function(err, user){
        if (err)
        {
            model.message = "Sign up Failed, An error occurred.";
            model.error = err;
            res.json(model);
            return
        }

        if (user) 
        {
            model.message = "Sign up Failed, current email has been used by other user.";
            model.user = user;
            res.json(model);
            return
        }
        else 
        {
            newUser.save(function(err, User){
                if (err)
                {
                    model.message = "Sign up Failed, An error occurred when saving into database.";
                    model.error = err;
                    res.json(model);
                    return
                }
                else
                {
                    model.message = "Sucessfully sign up.";
                    model.user = user;
                    model.success = true;
                    res.json(model);
                }
            })
        }
    });

})


module.exports = router;