/**
 * @api {get} /user/:id get user information
 * @apiName userDetails
 * @apiGroup User
 *
 * @apiHeader {String} x-auth User unique access-key.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 *  
 * @apiSuccess {String} _id id of the User.
 * @apiSuccess {String} username username of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} admin state of the User.
 * @apiSuccess {Number} Money Money of the user.
 * @apiSuccess {Object} stats object of stats of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "_id": "5cf26e209b22561e6c6d957a",
 *          "username": "Damso",
 *          "email": "noir@gmail.com",
 *          "admin": false,
 *          "money": 520,
 *          "stats": {
 *              "score": 60,
 *              "betsNumber": 1,
 *              "wonBets": 1,
 *              "canceledBets": 0,
 *              "coteAverage": 3,
 *              "betAverage": 20,
 *              "updatedAt": "2019-06-01T12:29:42.705Z"
 *          }
 *      }    
 * 
 */
var {User} = require('./../../Models/User');
const {adminOrUser} = require('./../../middleware/authenticate');
const userDetails = (req,res) =>{
    adminOrUser(req.params.id, req.user._id).then(()=>{
        res.send(req.user);
    }).catch((e)=>{
        res.status(401).send(e);
    })
}

module.exports = userDetails;