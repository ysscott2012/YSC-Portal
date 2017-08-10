require('./config/config');

var express = require('express');
var bodyParser = require('body-parser');

// Set up mongoDB connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true});

const port = process.env.PORT;

// declare routers
var userRoutes = require('./routes/user.routes');

var app = express();
app.use(bodyParser.json());

// The headers must be sent to allow Cross Origin Resource Sharing
// Requests to connect will be denied without this
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, x-auth');
    res.setHeader('Access-Control-Expose-Headers', 'x-auth');
    next();
});

// define routers
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Started up with at port ${port}`);
})

module.exports = {app};