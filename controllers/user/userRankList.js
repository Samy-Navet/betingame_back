/**
 * @api {get} /user/rank get the ranking list
 * @apiName userRankList
 * @apiGroup User
 *
 * @apiDescription route similar than user list but made for the ranking
 * @apiParam {String} id user id IF CONNECTED : match to get the list AND the user Rank. if no id parameter => myRank = null
 * 
 * @apiParamExample {url} Request-Example:
 *     {
 *         "url" : "/user/rank?id=1asbzhz254fdz51"
 *       }
 *
 * @apiSuccess {Number} score ranking score of the user.
 * @apiSuccess {Number} betsNumber number of bets.
 * @apiSuccess {Number} wonBets number of won bets
 * @apiSuccess {Number} canceledBets number of canceledBets.
 * @apiSuccess {Number} coteAverage Average of all user bets betting odds
 * @apiSuccess {Number} betAverage average of all the bets.
 * @apiSuccess {String} _id id of the user
 * @apiSuccess {String} username username
 *  
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *       "myRank": {
*               "_id": "5ca3169662ca77093cc91f22",
*               "username": "toto",
*               "rank": 25,
*               "stats" : {
*                  "score": 225,
*                  "betsNumber": 1,
*                  "wonBets": 1,
*                  "canceledBets": 0,
*                  "coteAverage": 6,
*                  "betAverage": 23.5,
*              }
*           }
 *       "ranking": [
 *           {
 *               "_id": "5ca3169662ca77093cc91f22",
 *               "username": "tutu",
 *               "rank" : 1,
 *               "stats" : {
 *                  "score": 700,
 *                  "betsNumber": 1,
 *                  "wonBets": 1,
 *                  "canceledBets": 0,
 *                  "coteAverage": 6,
 *                  "betAverage": 23.5,
 *              }
 *           },
 *          {
 *               "_id": "5ca3169662ca77093cc91f22",
 *               "username": "tata",
 *               "rank" : 2,
 *               "stats" : {
 *                  "score": 500,
 *                  "betsNumber": 1,
 *                  "wonBets": 1,
 *                  "canceledBets": 0,
 *                  "coteAverage": 6,
 *                  "betAverage": 23.5,
 *              }
 *           },
 *          {
 *               "_id": "5ca3169662ca77093cc91f22",
 *               "username": "titi",
 *               "rank": 3,
 *               "stats" : {
 *                  "score": 300,
 *                  "betsNumber": 1,
 *                  "wonBets": 1,
 *                  "canceledBets": 0,
 *                  "coteAverage": 6,
 *                  "betAverage": 23.5,
 *              }
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
        var myRank = false;
        var result = {};
        ranksList.forEach((user,userIndex) => {
            ranksList[userIndex].rank = userIndex + 1;
            if(req.query.id && user._id == req.query.id){
                myRank =  _.pick(user,['_id','username','stats','rank']);
            }
            ranksList[userIndex] =  _.pick(ranksList[userIndex],['_id','username','stats','rank']);
        });     

        if(myRank !== false){
            res.status(200).json({'myRank': myRank, 'rankList': ranksList});
        } else {
            res.status(200).json({'rankList' : ranksList});
        }
    }).catch((ranksErr)=>{
        res.status(500);
    })
}

module.exports = rankList;