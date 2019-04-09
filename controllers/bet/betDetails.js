/**
 * @api {get} /user/:id/bet/:betid get the bet details
 * @apiName betDetails
 * @apiGroup Bet
 *
 *@apiHeader {String} x-auth Users unique token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM"
 *     }
 *
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
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
 *       }
 * 
 *
 */
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