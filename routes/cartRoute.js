const express = require('express');
const userList = require('./../controllers/cart/userCreate');
var app = express();


app.route('/user/:id/cart')
    .post(cartCreate)
    .delete(cartDeleteAll)

app.route('/user/:id/cart/:match')
    .delete(cartDeleteMatch)


