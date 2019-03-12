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

// middlewares
var {authenticate} = require('./middleware/authenticate')
var {admin} = require('./middleware/adminAuthenticate')

const port = process.env.PORT || 8080;

var app = express();

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

userRoute(app);
matchRoute(app);
cartRoute(app);
betRoute(app);

app.listen(port, function() {
    console.log('Server en écoute :) port '+port);
});
