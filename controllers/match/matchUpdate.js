/**
 * @api {put} /match/:id update match
 * @apiName matchUpdate
 * @apiGroup Match
 *
 *@apiHeader {String} x-auth unique token, ONLY admin token 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM"
 *     }
 * 
 *  @apiParamExample {json} Request-Example:
 *     {
 *           "title" : "LEC - G2 vs MSF",
 *           "game": "League of Legends",
 *           "datematch": "2018-10-26T15:45:00",	
 *           "participant":[{
 *               "participantnom": "G2",
 *               "coteparticipant": 1.02
 *           },
 *           {
 *               "participantnom": "MSF",
 *               "coteparticipant": 2.25
 *           }]
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

const matchUpdate = (req,res) => {
    var id = req.params.id
    var body = req.body
    Match.findOneAndUpdate({_id: id},{$set: body}, {new: true}).then((result) =>{
        if(result){
            res.status(200).send();
            betUpdate.updateBetsAfterMatch(id);
        }
        else
        {
            res.status(404).send()  
        }

    }).catch((err) =>{
        res.status(400).send()
    })
};

module.exports = matchUpdate;