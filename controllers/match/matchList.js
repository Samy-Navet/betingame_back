/**
 * @api {get} /match/ get the match list
 * @apiName matchList
 * @apiGroup Match
 *
 *@apiHeader {String} x-auth Users unique token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM3MjBjMWJjZGY0NDFjYjQzNzVmYzciLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ3MTE2NzM4fQ.qPdV5j5Rq4aR9sdSydHpbRfGkzjKT84--KRQtM"
 *     }
 * 
 * @apiParam {String} for_bets FOR THE APP : match list only for bets (in the app).
 * 
 * @apiParamExample {url} Request-Example:
 *     {
 *         "url" : "/match?for_bets=1"
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
 *      [{
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
 *       }]
 * 
 *
 */
var {Match} = require('./../../Models/Match');
const matchList = (req, res) =>{
    if(req.query.for_bets && req.query.for_bets == 1){
        Match.find({state: 0}).select('-__v').then((matchs) =>{
            if(matchs){
                res.status(200).send(matchs)
            }
            else
            {
                res.status(404).send(null)
            }
    
        }).catch((e) =>{
            res.status(400).send(e);
        })
    }
    else
    {
        Match.find().select('-__v').then((matchs) =>{
            if(matchs){
                res.status(200).send(matchs)
            }
            else
            {
                res.status(404).send(null)
            }
    
        }).catch((e) =>{
            res.status(400).send(e);
        })
    }
    
};

module.exports = matchList;