const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')

// config db
var {mongoose} = require('./db/mongoose');

// routes
var router = express.Router();
const userRoute = require('./routes/userRoute');
const matchRoute = require('./routes/matchRoute');
const cartRoute = require('./routes/cartRoute');
const betRoute = require('./routes/betRoute');
const docRoute = require('./routes/docRoute');
const rankRoute = require('./routes/rankRoute')
// middlewares
var {authenticate} = require('./middleware/authenticate')
var {admin} = require('./middleware/adminAuthenticate')

const port = process.env.PORT || 8080;

var app = express();

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/doc', express.static(__dirname + '/doc/'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

userRoute(app);
matchRoute(app);
cartRoute(app);
betRoute(app);
rankRoute(app);
docRoute(app);
app.listen(port, function() {
    console.log('Server en écoute :) port '+port);
});
