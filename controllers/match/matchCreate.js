/**
 * @api {post} /match/ create a match
 * @apiName matchCreate
 * @apiGroup Match
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
 * 
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
        res.status(200).send();
    }).catch((e) => {
        res.status(400).send(e);
    })
}

module.exports = matchCreate;