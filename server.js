const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')

var {mongoose} = require('./db/mongoose');
var {User} = require('./Models/User');
var {Match} = require('./Models/Match');

var {authenticate} = require('./middleware/authenticate')
var {admin} = require('./middleware/adminAuthenticate')

const port = process.env.PORT || 8080;

var app = express();

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res) =>{
    res.send('Bienvenue sur l\' api betingame ! utilisez postman pour tester toutes les routes !')
})
.post('/user/', (req, res) =>{
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var admin = req.body.admin

    var user = new User({
        username: username,
        email: email,
        password: password
    });
    if(admin != null){
        user.admin = admin
    }
    user.save().then(() =>{
        return user.generateAuthToken()
    }).then((data) =>{
        res.header('x-auth', data.token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})
.post('/user/login', (req,res) =>{
    var username = req.body.username
    var password = req.body.password


    User.findByCredentials(username, password).then((user) => {
        return user.generateAuthToken().then((data) => {
          res.header('x-auth', data.token).send(data.user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
})


app.get('/user/:id', authenticate, (req,res) =>{
    var id = req.params.id
    if(req.user._id == id){
        console.log(req.user);
        res.send(req.user);
    }
    else
    {
        res.status(401).send();
    }
})
.delete('/user/:id', authenticate, (req, res) => {
    var id = req.params.id
    if(req.user._id == id || req.user.admin == true){
        User.deleteOne({_id: id}).then(() =>{
            res.status(200).send();
        }).catch((e) =>{
            res.status(400).send(e);
        })
    }
    else
    {
        res.status(401).send();
    }
})
.delete('/user/:id/logout', authenticate, (req,res) =>{
    var id = req.params.id;
    if(req.user._id == id){
        req.user.removeToken(req.token).then(() =>{
            res.status(200).send();
        }, () =>{
            res.status(400).send();
        })
    }
    else
    {
        res.status(401).send();
    }
})
.put('/user/:id', authenticate, (req,res) =>{
    var id = req.params.id
    var body = req.body;

    if(req.user._id == id || req.user.admin === true){
        User.findByIdAndUpdate(id,{$set: body}, {new: true}).then((result) =>{
            res.status(200).send()
        }).catch((error) =>{
            res.status(400).send(error)
        })
    }
    else
    {
        res.status(401).send();
    }
    
})
.get('/matchs/', authenticate, (req, res) =>{
    Match.find().then((matchs) =>{
        res.status(200).send(matchs)
    }).catch((e) =>{
        res.send(e);
    })
})
.post('/matchs/', admin, (req, res) =>{
    var date = req.body.datematch
    var title = req.body.title
    var participants = req.body.participant
    var game = req.body.game
    var match = new Match({
        title: title,
        game: game,
        dates: {
            matchdate: new Date(date)
        },
        participant: participants
    })  
   
    match.save().then((result) =>{
        res.status(200).send();
    }).catch((e) => {
        res.status(400).send(e);
    })
})
.delete('/matchs/:id', admin, (req,res) =>{
    var id = req.params.id;

     Match.deleteOne({_id: id}).then((result) =>{
         res.status(200).send();
     }).catch((err) =>{
         res.status(400).send();
     })
})
.put('/matchs/:id', admin, (req,res) => {
    var id = req.params.id
    var body = req.body
    Match.findByIdAndUpdate(id,{$set: body}, {new: true}).then((result) =>{
        res.status(200).send()
    }).catch((err) =>{
        res.status(400).send()
    })
})

app.listen(port, function() {
    console.log('Server en écoute :) port '+port);
});
