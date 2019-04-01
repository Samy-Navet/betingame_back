var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
var {Cart} = require('./../../Models/Cart');
var {User} = require('./../../Models/User');

const betCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;
    // console.log(body.matchs);
    var newBet = new Bet({
        userid : id,
        matchs : body.matchs,
        bet : body.bet,
        status : 0
    })
    var coteTotale = 0;
    var matchs = body.matchs
    promises = [];
    matchToRemoveFromCart = [];
    for(var i = 0; i < matchs.length; i++){
        promises.push(new Promise((resolve, reject) =>{
            Match.findOne({ _id : matchs[i].matchid},{"participant" : {$elemMatch : {_id : matchs[i].participantchoice}}}).then((matchDetails) =>{
                console.log('match found');
                coteTotale += matchDetails.participant[0].coteparticipant;
                matchToRemoveFromCart.push(matchDetails._id);
                resolve(coteTotale);
            }).catch((e) => {
                reject(e);
            })
        }))     
    }

    Promise.all(promises).then(()=>{
        if(coteTotale > 0 ){
            newBet.cotetotale = coteTotale;
            newBet.save().then(() =>{
                // I/ deduction de l'argent
                // II/ VIDAGE DU PANIER
                console.log(body.bet);
                User.findByIdAndUpdate(id, {$inc: {money: -body.bet}}, {new: true}).then((user) =>{
                    res.send(user);
                    // Cart.findOneAndUpdate({userid: id}, {$unset: {  "matches" : { $elemMatch: { "matchid" : {$in : matchToRemoveFromCart } } } } }).then(() =>{
                    //     res.status(200).send(newBet);
                    // })
                })                
            }).catch(() =>{
                res.status(400).send('not saved');
            })
        }
    }).catch((promisesErr)=>{
        res.send(promisesErr);
    })
     
}

module.exports = betCreate;