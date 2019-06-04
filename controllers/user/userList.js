/**
 * @api {get} /user/ get users list
 * @apiName userList
 * @apiGroup User
 *
 * @apiHeader {String} x-auth User unique access-key, user must be an admin !!
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 *  
 * @apiDescription you only need to pass a admin token in parameters. for each item in the returned array, you have these followings success properties
 * @apiSuccess {String} _id id of the User.
 * @apiSuccess {String} username username of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} admin state of the User.
 * @apiSuccess {Number} Money Money of the user.
 * @apiSuccess {Object} stats object of stats of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *           {
 *               "_id": "5ca3169662ca77093cc91f22",
 *               "username": "toto",
 *               "email": "toto@gmail.com",
 *               "admin": false,
 *               "money" : 430,
 *               "rank" : {
 *                  "score": 225,
 *                  "betsNumber": 1,
 *                  "wonBets": 1,
 *                  "canceledBets": 0,
 *                  "coteAverage": 6,
 *                  "betAverage": 23.5,
 *              }
 *           }
 *       ]
 * 
 */
var {User} = require('./../../Models/User');

const userList = (req,res) =>{
    User.find().then((users) =>{
        res.status(200).send(users);
    }).catch((e) =>{
        res.status(400).send();
    })
};

module.exports = userList;