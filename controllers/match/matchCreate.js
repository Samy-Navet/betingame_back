/**
 * @api {post} /match/ create a match
 * @apiName matchCreate
 * @apiGroup Match
 *
 * @apiHeader {String} x-auth User unique token, ONLY admin token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 * 
 * @apiParam {String} title match title.
 * @apiParam {String} game game name.
 * @apiParam {Date} datematch Date("<YYYY-mm-ddTHH:MM:ss>") of the beginning of the match.
 * @apiParam {String} participantnom in the array of object "participant", participantname is the property of the name of the participant
 * @apiParam {Number} participantcote in the array of object "participant", participantcote is the property of the betting odds of the participant
 * 
 * @apiParamExample {json} Request-Example:
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
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "dates": {
 *               "matchdate": "2018-10-26T15:45:00.000Z",
 *               "time": "2019-01-10T12:34:24.576Z"
 *           },
 *           "game": "League of Legends",
 *           "state": 0,
 *           "_id": "5c373bd0cde84e428ce07d3d",
 *           "title": "LEC - G2 vs MSF",
 *           "participant": [
 *               {
 *                   "score": 0,
 *                   "_id": "5c373bd0cde84e428ce07d3f",
 *                   "participantnom": "G2",
 *                   "coteparticipant": 1.02
 *               },
 *               {
 *                   "score": 0,
 *                   "_id": "5c373bd0cde84e428ce07d3e",
 *                   "participantnom": "Misfits",
 *                   "coteparticipant": 2.25
 *               }
 *           ],
 *           "winner": null
 *       }
 *
 */
var {Match} = require('./../../Models/Match');
const matchCreate = (req, res) =>{
    var date = req.body.datematch
    var title = req.body.title
    var participants = req.body.participant
    var game = req.body.game
    var match = new Match({
        title: title,
        game: game,
        dates: {
            matchdate: new Date(date)
        },
        participant: participants
    })  
   
    match.save().then((result) =>{
        res.status(200).send(match);
    }).catch((e) => {
        res.status(400).json({'error':e});
    })
}

module.exports = matchCreate;