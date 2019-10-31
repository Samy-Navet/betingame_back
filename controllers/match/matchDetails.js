/**
 * @api {get} /match/:id get the match details
 * @apiName matchDetails
 * @apiGroup Match
 *
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

const matchDetails = (req, res) =>{
    var id = req.params.id;
    Match.findById(id).select('-__v').then((match) =>{
        if(match){
            res.status(200).send(match)
        }
        else
        {
            res.status(404).send(null);
        }
    }).catch((e) =>{
        res.status(400).send(e);
    })
}

module.exports = matchDetails;