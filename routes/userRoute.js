const express = require('express');
const userList = require('./../controllers/user/userList');
console.log(userList);
var app = express();

app.route('/user')
    .get(userList)
    .post(userRegister);

app.route('/user/:id')
    .get(userDetails)
    .put(updateUser)
    .delete(userDelete)

app.route('/user/login')
    .post(userLogin)

app.route('/user/:id/logout')
    .delete(userLogout)

