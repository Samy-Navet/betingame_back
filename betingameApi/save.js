const express = require('express');
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config = require('./config');
const dbFunctions = require('dbFunctions');

var app = express();
const omdb_api_key  = 'b6e3dfa3';

let userRooter = express.Router()
var connexion = mysql.createConnection(config.db);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>je suis à l\'accueil</h1>');

})
.get(config.routes.api+'/test', (req,res) => {
    // recupération de données d'une api externe
    res.setHeader('Content-Type','application/json');
    
    var url = 'http://www.omdbapi.com/?apikey='+omdb_api_key+'&t=star+wars';
    // console.log(url);
    // res.send(url);
    request(url, (error, response, body) =>{
        // data 

        let data = JSON.parse(response.body);
        res.send(data);
    })
})

userRooter.route('/')
    .get((req, res) => {
        // récupération de données de la base de données
        connexion.connect((err) => {
            if(err){
                console.log(err.code);
                console.log(err.fatal);
            }
            else
            {
                $query = 'SELECT * FROM user';

                connexion.query($query,(err, rows, fields) =>{
                    if(err){
                        return;
                    }
                    else
                    {
                        userInfo = rows;
                        res.send(userInfo);
                    }
                })
                connexion.end(() => {
                    console.log('connection ended');
                })
            }
        })
    })
    .post((req,res) =>{
        
        (async() =>{
            try{
                let insert = await dbFunctions.userInsert(req, res);
                console.log(insert)
                res.send(insert);
            } catch(err){
                console.log(err)
            }     
        })()
    })
userRooter.route('/:user')
    .put((req,res) =>{
    
    })
    .delete((req,res) =>{

    })
userRooter.route('/:user/cart')
    .get((req,res) =>{
        res.send('Bienvenue au panier');
    })
    .post((req,res) =>{

    })
    .put((req,res) =>{

    })
    .delete((req,res) =>{

    })
userRooter.route('/:user/bets')
    .get((req,res) =>{
        res.send('Bienvenue au panier');
    })
    .post((req,res) =>{

    })



app.use(config.routes.User, userRooter);

app.listen(config.port, () => console.log('listening in port '+config.port));