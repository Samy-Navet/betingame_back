var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
var {Cart} = require('./../../Models/Cart');
var {User} = require('./../../Models/User');

const betCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;

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
            User.findOne({_id: id}).then((user) =>{
                if(user){
                    // verification si assez de monnaie
                    if(user.money - body.bet >= 0){

                        newBet.save().then(() =>{
                            // I/ deduction de l'argent
                            user.update({$inc: {money: -body.bet}}, {new: true}).then(()=>{
                                // II/ VIDAGE DU PANIER
                                Cart.findOneAndUpdate({userid: id}, {$pull: {  "matchs" : { "matchid" : {$in : matchToRemoveFromCart } } } }, {new : true}).then((cart) =>{
                                    res.status(200).send(newBet);
                                }) 
                            })              
                        }).catch(() =>{
                            res.status(400).send({'error':'not saved'});
                        })
                    }
                    else
                    {
                        res.send({'error':'not enough money'});
                    }
                }
                else
                {
                    res.send({'error':'no user found'});
                }
            })  
        }
    }).catch((promisesErr)=>{
        res.send(promisesErr);
    })
     
}

module.exports = betCreate;