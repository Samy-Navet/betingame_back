const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')

// config db
var {mongoose} = require('./db/mongoose');

// routes
var router = express.Router();
const userRoute = require('./routes/userRoute');
const matchRoute = require('./routes/matchRoute');

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
// app.get('/',(req,res) =>{
//     res.send('Bienvenue sur l\' api betingame ! utilisez postman pour tester toutes les routes !')
// })
// .post('/user/', (req, res) =>{
//     var username = req.body.username
//     var password = req.body.password
//     var email = req.body.email
//     var admin = req.body.admin

//     var user = new User({
//         username: username,
//         email: email,
//         password: password
//     });
//     if(admin != null){
//         user.admin = admin
//     }
//     user.save().then(() =>{
//         return user.generateAuthToken()
//     }).then((data) =>{
//         res.header('x-auth', data.token).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })
// .post('/user/login', (req,res) =>{
//     var username = req.body.username
//     var password = req.body.password


//     User.findByCredentials(username, password).then((user) => {
//         return user.generateAuthToken().then((data) => {
//           res.header('x-auth', data.token).send(data.user);
//         });
//     }).catch((e) => {
//         res.status(400).send();
//     });
// })

// app.get('/user', authenticate, (req,res) =>{
//     User.find().then((users) =>{
//         res.status(200).send(users);
//     }).catch((e) =>{
//         res.status(400).send();
//     })
// })
// .get('/user/:id', authenticate, (req,res) =>{
//     var id = req.params.id
//     if(req.user._id == id){
//         res.send(req.user);
//     }
//     else
//     {
//         res.status(401).send();
//     }
// })
// .delete('/user/:id', authenticate, (req, res) => {
//     var id = req.params.id
//     if(req.user._id == id || req.user.admin == true){
//         User.deleteOne({_id: id}).then(() =>{
//             res.status(200).send();
//         }).catch((e) =>{
//             res.status(400).send(e);
//         })
//     }
//     else
//     {
//         res.status(401).send();
//     }
// })
// .delete('/user/:id/logout', authenticate, (req,res) =>{
//     var id = req.params.id;
//     if(req.user._id == id){
//         req.user.removeToken(req.token).then(() =>{
//             res.status(200).send();
//         }, () =>{
//             res.status(400).send();
//         })
//     }
//     else
//     {
//         res.status(401).send();
//     }
// })
// .put('/user/:id', authenticate, (req,res) =>{
//     var id = req.params.id
//     var body = req.body;

//     if(req.user._id == id || req.user.admin === true){
//         User.findByIdAndUpdate(id,{$set: body}, {new: true}).then((result) =>{
//             res.status(200).send()
//         }).catch((error) =>{
//             res.status(400).send(error)
//         })
//     }
//     else
//     {
//         res.status(401).send();
//     }
    
// })
// .get('/matchs/', authenticate, (req, res) =>{
//     Match.find().then((matchs) =>{
//         if(matchs){
//             res.status(200).send(matchs)
//         }
//         else
//         {
//             res.status(404).send(null)
//         }

//     }).catch((e) =>{
//         res.status(400).send(e);
//     })
// })
// .get('/matchs/:id', authenticate, (req, res) =>{
//     var id = req.params.id;
//     Match.findById(id).then((match) =>{
//         if(match){
//             res.status(200).send(match)
//         }
//         else
//         {
//             res.status(404).send(null);
//         }
//     }).catch((e) =>{
//         res.status(400).send(e);
//     })
// })
// .post('/matchs/', admin, (req, res) =>{
//     var date = req.body.datematch
//     var title = req.body.title
//     var participants = req.body.participant
//     var game = req.body.game
//     var match = new Match({
//         title: title,
//         game: game,
//         dates: {
//             matchdate: new Date(date)
//         },
//         participant: participants
//     })  
   
//     match.save().then((result) =>{
//         res.status(200).send();
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })
// .delete('/matchs/:id', admin, (req,res) =>{
//     var id = req.params.id;

//      Match.deleteOne({_id: id}).then((result) =>{
//          res.status(200).send();
//      }).catch((err) =>{
//          res.status(400).send();
//      })
// })
// .put('/matchs/:id', admin, (req,res) => {
//     var id = req.params.id
//     var body = req.body
//     Match.findByIdAndUpdate(id,{$set: body}, {new: true}).then((result) =>{
//         if(result){
//             res.status(200).send()
//         }
//         else
//         {
//             res.status(404).send(null)  
//         }

//     }).catch((err) =>{
//         res.status(400).send()
//     })
// })
// .post('/user/:id/panier', authenticate, (req,res) => {
//     var body = req.body;
//     var id = req.params.id;
//     User.findById(id).then((user) =>{
//         for(var element in user.panier){
//             if(user.panier[element].nomdumatch == body.nomdumatch){
//                 var exist = true;
//                 break;
//             }
//         };
    
//         if(typeof exist === 'undefined' || exist !== true){
//             user.panier.push(body);
//             User.findByIdAndUpdate(id,{$set: user}, {new: true}).then((result) =>{
//                 res.status(200).send(result)
//             }).catch((err) =>{
//                 res.status(400).send()
//             })   
//         }
//         else
//         {
//             res.status(403).send();
//         }
//     }).catch((e) =>{
//         console.log(e);
//         res.status(400).send(e);
//     })
// })
// .delete('/user/:id/panier', authenticate, (req, res) => {
//     var id = req.params.id;
//     User.findById(id).then((user) =>{
//         user.panier = [];
//         User.findByIdAndUpdate(id,{$set: user}, {new: true}).then((result) =>{
//             res.status(200).send(result)
//         }).catch((err) =>{
//             res.status(400).send()
//         }) 
//     })
// })
// .delete('/user/:id/panier/:match', authenticate, (req,res) =>{
//     var id = req.params.id;
//     var match = req.params.match;
//     User.findByIdAndUpdate(id,{$pull:{'panier': {'_id': match}}},{new: true}).then((user) =>{
//         res.status(200).send(user);
//     })
//     .catch((err) =>{
//         res.status(400).send();
//     })
// })

app.listen(port, function() {
    console.log('Server en écoute :) port '+port);
});
