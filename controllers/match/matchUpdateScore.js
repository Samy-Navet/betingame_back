/**
 * @api {put} /match/:id update match score and status
 * @apiName matchUpdateScore
 * @apiGroup Match
 *
 *@apiHeader {String} x-auth unique token, ONLY admin token 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM"
 *     }
 * 
 * @apiParam {Number} state state of the match : 0 => not started, 1=> in progress, 2 => ended.
 * @apiParam {String} winner participant id of the winner, null if match in progress.
 * @apiParam {Number[]} array containing the participants scores, first item is the first participant and second item the second participant.
 * 
 * 
 *  @apiParamExample {json} Request-Example:
 *     {
 *           "state" : 2,
 *           "participant" : [3,0],
 *           "winner" : "5c530a65b328b6280cd4d1b0"
 *       }
 *
 * @apiSuccess {String} title match title.
 * @apiSuccess {String} game game name.
 * @apiSuccess {Date} matchdate Date("<YYYY-mm-ddTHH:MM:ss>") of the beginning of the match.
 * @apiSuccess {Date} time Date("<YYYY-mm-ddTHH:MM:ss>") of the creation of the match in the database.
 * @apiSuccess {Number} state state of the match : 0 => créé, 1=> en cours, 2 => terminé.
 * @apiSuccess {String} winner _id of the participant that won (participant[x]._id), null if the match is not ended.
 * @apiSuccess {Number} score score of the participant (participant[x].score), 0 by default.
 * @apiSuccess {String} participantnom name of the participant (participant[x].participantnom)
 * @apiSuccess {Number} participantcote betting odds of the participant (participant[x].participantcote)
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "dates": {
 *               "matchdate": "2018-11-03T05:30:00.000Z",
 *               "time": "2019-01-10T12:34:24.576Z"
 *           },
 *           "game": "League of Legends",
 *           "state": 2,
 *           "_id": "5c373bd0cde84e428ce07d3d",
 *           "title": "FNC VS IG",
 *           "participant": [
 *               {
 *                   "score": 0,
 *                   "_id": "5c373bd0cde84e428ce07d3f",
 *                   "participantnom": "Fnatic",
 *                   "coteparticipant": 2.5
 *               },
 *               {
 *                   "score": 3,
 *                   "_id": "5c373bd0cde84e428ce07d3e",
 *                   "participantnom": "Invictus Gaming",
 *                   "coteparticipant": 1.5
 *               }
 *           ],
 *           "winner": "5c373bd0cde84e428ce07d3e"
 *       }
 * 
 *
 */
var {Match} = require('./../../Models/Match');
var betUpdate = require('./../bet/betUpdateStatus');

const matchUpdateScore = (req,res) => {
    var id = req.params.id
    var body = req.body
    Match.findOne({_id : id}).lean().then((match) =>{
        if(match){
            if(match.api_match_id){

            }
            else
            {
                match.state = body.state;
                match.winner = body.winner;
                match.participant[0].score = body.participant[0];
                match.participant[1].score = body.participant[1];
                Match.updateOne({_id : id}, {$set: match}, {new: true}).then((result)=>{
                    res.status(200).send(match);
                    betUpdate.updateBetsAfterMatch(id);

                }).catch((updateErr)=>{
                    res.status(500).send(updateErr);
                })
            }
        }else{
            res.status(404).send();
        }
    }).catch((err)=>{
        res.status(500).send(err);
    })
};

module.exports = matchUpdateScore;