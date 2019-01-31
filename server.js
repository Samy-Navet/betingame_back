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
