/**
 * @api {get} /user/rank get the ranking list
 * @apiName rankList
 * @apiGroup Rank
 *
 * 
 * @apiParam {String} id user id IF CONNECTED : match to get the list AND the user Rank. if no id parameter => myRank = null
 * 
 * @apiParamExample {url} Request-Example:
 *     {
 *         "url" : "/match?id=1asbzhz254fdz51"
 *       }
 *
 * @apiSuccess {Number} score ranking score of the user.
 * @apiSuccess {Number} betsNumber number of bets.
 * @apiSuccess {Number} wonBets number of won bets
 * @apiSuccess {Number} canceledBets number of canceledBets.
 * @apiSuccess {Number} coteAverage Average of all user bets betting odds
 * @apiSuccess {Number} betAverage average of all the bets.
 * @apiSuccess {String} userid _id of the user
 * @apiSuccess {Date} updatedAt last update of the ranking
 * @apiSuccess {String} username username
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *       "myRank": {
 *           "_id": "5cbdd44ab7ec0b0a806d3140",
 *           "score": 0,
 *           "betsNumber": 0,
 *           "wonBets": 0,
 *           "canceledBets": 0,
 *           "coteAverage": 0,
 *           "betAverage": 23.5,
 *           "userid": "5cbdd44ab7ec0b0a806d313e",
 *           "updatedAt": "2019-04-22T14:48:42.354Z",
 *           "username": "tata"
 *       },
 *       "ranking": [
 *           {
 *               "_id": "5cc1aeb4fecb2d19a42c9da0",
 *               "score": 225,
 *               "betsNumber": 1,
 *               "wonBets": 1,
 *               "canceledBets": 0,
 *               "coteAverage": 6,
 *               "betAverage": 23.5,
 *               "userid": "5cc1aeb3fecb2d19a42c9d9f",
 *               "updatedAt": "2019-04-25T12:57:24.215Z",
 *               "username": "toto"
 *           },
 *           {
 *               "_id": "5cc2c69f90f84d8d1bec62c6",
 *               "score": 126,
 *               "betsNumber": 2,
 *               "wonBets": 1,
 *               "canceledBets": 0,
 *               "coteAverage": 2.52,
 *               "userid": "5c3720c1bcdf441cb4375fc7",
 *               "updatedAt": "2019-04-26T09:21:50.121Z",
 *               "betAverage": 50,
 *               "username": "Samy"
 *           },
 *           {
 *               "_id": "5cbdd44ab7ec0b0a806d3140",
 *               "score": 0,
 *               "betsNumber": 0,
 *               "wonBets": 0,
 *               "canceledBets": 0,
 *               "coteAverage": 0,
 *               "userid": "5cbdd44ab7ec0b0a806d313e",
 *               "updatedAt": "2019-04-22T14:48:42.354Z",
 *               "username": "tata"
 *           }
 *       ]
 *   }
 * 
 *
 */
var {User} = require('./../../Models/User');
var _ = require('lodash');

const rankList = (req, res) => {
    User.find({}).select('-__v').sort([['stats.score','-1']]).lean().then((ranks)=>{  
        var ranksList = ranks;
        var result = {};
        ranksList.forEach((user,userIndex) => {
            ranksList[userIndex].rank = userIndex + 1;
            if(req.query.id && user._id === req.query.id){
                var myRank = user;
            }
        });     
        var rankListResult = _.pick(ranksList,['_id','username','stats','rank']);
        if(myRank){
            res.status(200).json({'myRank': myRank, 'rankList': rankListResult});
        } else {
            res.status(200).json({'rankList' : rankListResult});
        }
       res.status(200).send();
    }).catch((ranksErr)=>{
        res.status(500);
    })
}

module.exports = rankList;