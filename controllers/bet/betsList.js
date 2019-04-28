/**
 * @api {get} /user/:id/bet/ get the user bet list
 * @apiName userBetList
 * @apiGroup Bet
 *
 *
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [{
 *           "_id": "5ca70546c5b2eb31fc57330c",
 *           "userid": "5c3720c1bcdf441cb4375fc7",
 *           "matchs": [
 *               {
 *                   "_id": "5ca70546c5b2eb31fc57330e",
 *                   "matchid": "5c530a65b328b6280cd4d1ae",
 *                   "participantchoice": "5c530a65b328b6280cd4d1b0"
 *               },
 *               {
 *                   "_id": "5ca70546c5b2eb31fc57330d",
 *                   "matchid": "5c373bd0cde84e428ce07d3d",
 *                   "participantchoice": "5c373bd0cde84e428ce07d3e"
 *               }
 *           ],
 *           "bet": 50,
 *           "status": 0,
 *           "cotetotale": 2.52,
 *       }]
 * 
 *
 */
var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
const _ = require('lodash');

var userBetsList = (req,res) =>{
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

/**
 * @api {get} /bet/ get the bet list
 * @apiName betList
 * @apiGroup Bet
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [{
 *           "_id": "5ca70546c5b2eb31fc57330c",
 *           "userid": "5c3720c1bcdf441cb4375fc7",
 *           "matchs": [
 *               {
 *                   "_id": "5ca70546c5b2eb31fc57330e",
 *                   "matchid": "5c530a65b328b6280cd4d1ae",
 *                   "participantchoice": "5c530a65b328b6280cd4d1b0"
 *               },
 *               {
 *                   "_id": "5ca70546c5b2eb31fc57330d",
 *                   "matchid": "5c373bd0cde84e428ce07d3d",
 *                   "participantchoice": "5c373bd0cde84e428ce07d3e"
 *               }
 *           ],
 *           "bet": 50,
 *           "status": 0,
 *           "cotetotale": 2.52,
 *       }]
 * 
 *
 */

var betsList = (req,res) =>{
    var body = req.body;
    var id = req.params.id
    Bet.find({}).select('-__v -matchs._id').lean().then((bets) =>{
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

module.exports = {betsList, userBetsList}