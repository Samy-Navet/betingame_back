const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')

// config db
var {mongoose} = require('./db/mongoose');

// routes
var router = express.Router();
const userRoute = require('./routes/userRoute');
const matchRoute = require('./routes/matchRoute');
const betRoute = require('./routes/betRoute');
const docRoute = require('./routes/docRoute');

// middlewares
var {authenticate} = require('./middleware/authenticate')
var {admin} = require('./middleware/adminAuthenticate')

const port = process.env.PORT || 8080;

var app = express();

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/doc', express.static(__dirname + '/doc/'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth");
    next();
});

userRoute(app);
matchRoute(app);
betRoute(app);
docRoute(app);
app.listen(port, function() {
    console.log('Server en écoute :) port '+port);
});
