const express = require('express');
const userList = require('./../controllers/match/matchList');
var app = express();

app.route('/match')
    .get(userList)
//     .post(userRegister);

// app.route('/match/:id')
//     .get(userDetails)
//     .put(updateUser)
//     .delete(userDelete)

// app.route('/match/login')
//     .post(userLogin)

// app.route('/match/:id/logout')
//     .delete(userLogout)

