var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');

const betUpdateStatus = (req,res) => {
    var id = req.params.betid

    Bet.findOne({_id : id}).then((bet) =>{
        var matchs = bet.matchs;
        matchQuery = [];
        for(var i = 0; i < matchs.length; i++){
            matchQuery.push(matchs[i].matchid);
        }
        // apres la maj du modele match
        Match.find({_id : {$in : matchQuery}}).then((matchDetails) =>{

        }).catch((matcherr) =>{
            res.send(matcherr);
        })
    }).catch((beterr) =>{
        res.send(beterr);
    })
}

module.exports = betUpdateStatus;