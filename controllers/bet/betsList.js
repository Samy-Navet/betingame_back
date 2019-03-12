var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
const _ = require('lodash')

var betsList = (req,res) =>{
    var body = req.body;
    var id = req.params.id
    Bet.find({userid : id}).then((bets) =>{
        var betsList = bets;
        for(var j = 0; j < betsList.length; j++){
            var matchs = betsList[j].matchs
            promises = [];
            for(var i = 0; i < matchs.length; i++){
                promises.push(new Promise((resolve,reject) =>{
                    Match.findOne({_id : matchs[i].matchid}).then((matchDetails) =>{
                        console.log(j);
                        betsList[j].matchdetails = matchDetails;
                        resolve();
                    });
                }))
            }
            Promise.all(promises);
        }
        res.send(bets);
    }).catch((e) => {
        res.send(e);
    })
}

module.exports = betsList