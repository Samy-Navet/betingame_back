// const mongoose = require('mongoose');
var {User} = require('./../../Models/User');

const userList = (req,res) =>{
    User.find().then((users) =>{
        res.status(200).send(users);
    }).catch((e) =>{
        res.status(400).send();
    })
};

module.exports = userList;