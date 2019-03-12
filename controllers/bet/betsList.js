var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');


var betsList = (req,res) =>{
    var body = req.body;
    var id = req.params.id
    Bet.find({userid : id}).then((bets) =>{
        for(var j = 0; j < bets.length; j++){
            var matchs = bets[j].matchs
            for(var i = 0; i < matchs.length; i++){
                Match.findOne({_id : matchs[i].matchid}).then((matchDetails) =>{
                    bets[j].matchs[i].details = matchDetails;
                })
            }
        }
    }).catch((e) => {
        res.send(e);
    })
}

module.exports = betsList