var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
const _ = require('lodash');

var betsList = (req,res) =>{
    var body = req.body;
    var id = req.params.id
    Bet.find({userid : id}).select('-__v -matchs._id').lean().then((bets) =>{
        var betsList = bets;
        var matchQuery = [];
        for(var i = 0; i < betsList.length; i++){
            var matchs = betsList[i].matchs
            for(j = 0; j < matchs.length; j++){
                matchQuery.push(betsList[i].matchs[j].matchid);
            }
        }
    
        Match.find({_id : {$in : matchQuery}}).select('-participant.coteparticipant -__v').then((matchDetails) =>{
            betsList.forEach((bet, betindex) => {
                bet.matchs.forEach((matchBet, matchBetIndex)=>{
                    matchDetails.forEach((match, matchindex) =>{
                        if(matchBet.matchid == match._id){
                            var matchdata = _.pick(match, ['dates','game','title','participant'])
                            betsList[betindex].matchs[matchBetIndex] = {...betsList[betindex].matchs[matchBetIndex], ...matchdata};
                        }
                    })
                })
            })

            res.send(betsList);
        });
    }).catch((betsErr) => {
        res.send(betsErr);
    })
}

module.exports = betsList