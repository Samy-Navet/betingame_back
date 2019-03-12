var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');


var betDetails = (req,res) =>{
    var body = req.body;
    var id = req.params.betid
    Bet.findOne({_id : body.id}).then((bet) =>{
        var matchs = bet.matchs
        matchsid = [];
        for(var i = 0; i < matchs.length; i++){
            matchsid.push(matchs.matchid);
        }
        if(matchsid.length >= 1){
            Match.findOne({_id : {$in : matchsid}}).then((matchDetails) =>{
                bet.matchs[i].details = matchDetails;
            }).catch((matcherror)=>{
                res.send(e);
            })
        }
    }).catch((beterror) => {
        res.send(e);
    })
}

module.exports = betDetails;