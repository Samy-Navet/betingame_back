var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
const _ = require('lodash')

var betDetails = (req,res) =>{
    var body = req.body;
    var id = req.params.betid
    Bet.findOne({_id : id}).then((bet) =>{
        console.log(bet);
        var matchs = bet.matchs
        matchsid = [];
        for(var i = 0; i < matchs.length; i++){
            matchsid.push(matchs[i].matchid);
        }
        if(matchsid.length >= 1){
            Match.find({_id : {$in : matchsid}}).select('-participant.coteparticipant').then((matchDetails) =>{
                bet.matchdetails = matchDetails;
                res.send(_.pick(bet, ['_id', 'matchdetails', 'bet','cotetotale','status']));
            }).catch((matchErr)=>{
                res.send(matchErr);
            })
        }
    }).catch((betErr) => {
        res.send(betErr);
    })
}

module.exports = betDetails;