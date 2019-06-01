var jp = require('jsonpath');

var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
var {User} = require('./../../Models/User');

var updateRank = require('./../user/updateUserRank');

const betUpdateStatus = (req,res) => {
    var betid = req.params.betid
    var userid = req.params.id
    Bet.findOne({_id : betid, userid: userid, status: {$in: [0,1] } }).then((bet) =>{
        var matchs = bet.matchs;
        matchQuery = [];
        for(var i = 0; i < matchs.length; i++){
            matchQuery.push(matchs[i].matchid);
        }

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
                    Bet.updateOne({_id: betid}, {$set : {status: 2}}, {new: true}).then((result)=>{
                        User.findOneAndUpdate({_id: userid},{$inc :{money : (bet.cotetotale * bet.bet) }},{new : true}).then((user)=>{
                            // update user stats
                            updateRank.updateRankAfterBet(userid,2,bet.cotetotale,bet.bet);
                            res.status(200).send(result);
                        })
                    })
                }
                else if(endedMatchNumber === matchNumber){
                    // update status ended
                    Bet.updateOne({_id: betid}, {$set : {status: -1}}, {new: true}).then((result)=>{
                        // update user stats
                        updateRank.updateRankAfterBet(userid,-1,bet.cotetotale,bet.bet);
                        res.status(200).send(result);
                    })
                }
                else
                {
                    // update status in progress
                    Bet.updateOne({_id: betid}, {$set : {status: 1}}, {new : true}).then((result)=>{
                        res.status(200).send(result);
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

const updateBetsAfterMatch = (id_match) => {
    Bet.find({'matchs.matchid': id_match, status: {$in: [0,1] } }).lean().then((bets) =>{
        bets.forEach((bet, betIndex) =>{
            var betid = bets[betIndex]._id;
            var userid = bets[betIndex].userid;
            var matchs = bets[betIndex].matchs;
            matchQuery = [];
            for(var i = 0; i < matchs.length; i++){
                matchQuery.push(matchs[i].matchid);
            }

            Match.find({_id : {$in : matchQuery}}).lean().then((matchsDetails) =>{
                var matchNumber = 0;
                var endedMatchNumber = 0;
                var matchSuccess = 0;
                matchsDetails.forEach((match, matchindex)=>{
                    var betMatch = jp.query(bets[betIndex],'$.matchs[?(@.matchid=="'+match._id+'")]');
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
                        Bet.updateOne({_id: betid}, {$set : {status: 2}}, {new: true}).then((result)=>{
                            User.findOneAndUpdate({_id: userid},{$inc :{money : (bets[betIndex].cotetotale * bets[betIndex].bet) }},{new : true}).then((user)=>{
                                // update user stats
                                updateRank.updateRankAfterBet(userid, 2, bets[betIndex].cotetotale, bets[betIndex].bet);
                            })
                        })
                    }
                    else if(endedMatchNumber === matchNumber){
                        // update status ended
                        Bet.updateOne({_id: betid}, {$set : {status: -1}}, {new: true}).then((result)=>{
                            // update user stats
                            updateRank.updateRankAfterBet(userid, -1, bets[betIndex].cotetotale, bets[betIndex].bet);
                        })
                    }
                    else
                    {
                        // update status in progress
                        Bet.updateOne({_id: betid}, {$set : {status: 1}}, {new : true}).then((result)=>{
                        })
                    }
                }
            }).catch((matcherr) =>{
                console.log(matcherr);
            })          
        })
    })

}

module.exports = {betUpdateStatus, updateBetsAfterMatch};