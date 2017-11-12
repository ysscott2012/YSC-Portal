require('./config/config');

var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');

const path = require('path');
const http = require('http');

// Set up mongoDB connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true});

// declare routers
var activityRoutes = require('./routes/activity.routes');
var adminRoutes = require('./routes/admin.routes');
var authRoutes = require('./routes/auth.routes');
var commentRoutes = require('./routes/comment.routes');
var userRoutes = require('./routes/user.routes');
var fileRoutes = require('./routes/file.routes');

var app = express();

app.use(bodyParser.json());
app.use(cors());

// define routers
app.use('/activity', activityRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/comment', commentRoutes);
app.use('/user', userRoutes);
app.use('/file', fileRoutes);


// Uncomment following method when you are using server.js serves static website.
// Point static path to dist
// app.use(express.static(path.join(__dirname, '../dist')));

// link to static website
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

// need to modify a bit
// app.get('/assets*', (req, res) => {
//   var file = path.join(__dirname, '../../src/' + req.path);
//   res.sendFile(file);
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

//module.exports = {app};
