var jp = require('jsonpath');

var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
var {User} = require('./../../Models/User');

const betUpdateStatus = (req,res) => {
    var betid = req.params.betid
    var userid = req.params.id
    Bet.findOne({_id : betid, userid: userid}).then((bet) =>{
        var matchs = bet.matchs;
        matchQuery = [];
        for(var i = 0; i < matchs.length; i++){
            matchQuery.push(matchs[i].matchid);
        }
        // apres la maj du modele match
        Match.find({_id : {$in : matchQuery}}).lean().then((matchsDetails) =>{
            var matchNumber = 0;
            var endedMatchNumber = 0;
            var matchSuccess = 0;
            matchsDetails.forEach((match, matchindex)=>{
                var betMatch = jp.query(bet,'$.matchs[?(@.matchid=="'+match._id+'")]');

                if(match.state == 2 && match.winner && match.winner !== null){
                    endedMatchNumber++;
                    if(match.winner == betMatch[0].participantchoice){
                        matchSuccess++;        
                    }
                }
                matchNumber++;
            });
            if(endedMatchNumber > 0){
                if(endedMatchNumber === matchNumber && matchSuccess === matchNumber){
                    // update status ended + give credit
                    // modifier user model before this !!
                    // Bet.updateOne({_id: betid}, {$set : {status: 2}}).then((result)=>{
                    //     User.findOneAndUpdate({_id: userid},{money : bet.cotetotale * bet.bet, score : bet.cotetotale * bet.bet}).then((user)=>{
                    //         res.status(200).send();
                    //     })
                    // })
                    console.log('in');
                }
                else if(endedMatchNumber === matchNumber){
                    // update status ended
                    Bet.updateOne({_id: betid}, {$set : {status: -1}}).then((result)=>{
                        res.status(200).send();
                    })
                }
                else
                {
                    // update status in progress
                    Bet.updateOne({_id: betid}, {$set : {status: 1}}).then((result)=>{
                        res.status(200).send();
                    })
                }
            }
        }).catch((matcherr) =>{
            res.send(matcherr);
        })
    }).catch((beterr) =>{
        res.send(beterr);
    })
}

module.exports = betUpdateStatus;