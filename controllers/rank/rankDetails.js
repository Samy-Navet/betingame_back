/**
 * @api {get} /rank/:rankid get the ranking details
 * @apiName rankDetails
 * @apiGroup Rank
 * @apiDescription if you wants to get the ranks by user, there is a different route : /user/:id/rank/
 *
 * 
 * 
 * @apiParamExample {url} Request-Example:
 *     
 *         "url" : "/rank/:rankid"
 *         "url2": "/user/:userid/rank/"
 *     
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
 *   
*       {
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
*       }
 *      
 *   
 * 
 *
 */
var {Rank} = require('./../../Models/Rank');
var {User} = require('./../../Models/User');
var _ = require('lodash');

const rankDetailByUser = (req, res) => {
    var userid = req.params.id
    Rank.findOne({userid}).select('-__v ').lean().then((rank)=>{
        User.findOne({_id: userid}).select('username').lean().then((user)=>{
            var username = user.username;
            rank.username = username;
            res.send(rank);
        }).catch((userErr)=>{
            res.status(500);
        })
    }).catch((rankErr)=>{
        res.status(500);
    })
    
}

const rankDetail = (req, res) => {
    var rankid = req.params.id
    Rank.findOne({_id: rankid}).select('-__v ').lean().then((rank)=>{
        User.findOne({_id: rank.userid}).select('username').lean().then((user)=>{
            var username = user.username;
            rank.username = username;
            res.send(rank);
        }).catch((userErr)=>{
            res.status(500)
        })
    }).catch((rankErr)=>{
        res.status(500)
    })
}

module.exports = {rankDetailByUser, rankDetail};