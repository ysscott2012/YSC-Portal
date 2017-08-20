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
var authRoutes = require('./routes/auth.routes');
var userRoutes = require('./routes/user.routes');

var app = express();
app.use(bodyParser.json());
app.use(cors());

// define routers
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// link to static website
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

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

module.exports = {app};
