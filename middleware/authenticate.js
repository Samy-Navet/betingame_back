var {User} = require('./../Models/User')
var authenticate = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) =>{
        res.status(401).send();
    })
}

var adminOrUser = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            return Promise.reject();
        }

        var id = req.params.id
        if(user._id == id || user.admin == true){
            req.user = user;
            req.token = token;
            next();
        }
        else
        {
            return Promise.reject();  
        }
        
    }).catch((e) =>{
        res.status(401).send();
    })
}

var onlyUser = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            return Promise.reject();
        }

        var id = req.params.id
        if(user._id == id){
            req.user = user;
            req.token = token;
            next();
        }
        else
        {
            return Promise.reject();  
        }
    }).catch((e) =>{
        res.status(401).send();
    })
}

var admin = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            return Promise.reject();
        }

        if(user.admin === true){
            req.user = user;
            req.token = token;
        next();
        }
        else
        {
            return Promise.reject();
        }

    }).catch((e) =>{
        res.status(401).send();
    })
}

module.exports = {authenticate, adminOrUser, admin, onlyUser};