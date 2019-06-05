/**
 * @api {put} /user/:id update user information
 * @apiName userUpdate
 * @apiGroup User
 *
 * @apiHeader {String} x-auth User unique access-key.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 * @apiParam {String} username User username string.
 * @apiParam {String} password User password string.
 * @apiParam {String} email User email string.
 * @apiParam {Boolean} admin Users state boolean.
 *
 * @apiSuccess {String} username username of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} admin state of the User.
 * @apiSuccess {Number} Money Money of the user.
 * @apiSuccess {Object} stats object of stats of the User.
 *
 *       
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * 
 *   {
 *       "_id": "5cf26e209b22561e6c6d957a",
 *       "username": "Damso",
 *       "email": "noir@gmail.com",
 *       "admin": false,
 *       "money": 520,
 *       "stats": {
 *           "score": 0,
 *           "betsNumber": 0,
 *           "wonBets": 0,
 *           "canceledBets": 0,
 *           "coteAverage": 0,
 *           "betAverage": 0,
 *           "updatedAt": "2019-06-01T12:29:42.705Z"
 *       }
 *   }
 */
var {User} = require('./../../Models/User');
var {adminOrUser} = require('./../../middleware/authenticate');

const userUpdate = (req,res) =>{
    var id = req.params.id
    var body = req.body;
    adminOrUser(id, req.user._id).then(()=>{
        User.findOneAndUpdate({_id: id},{$set: body}, {new: true}).then((result) =>{
            res.status(200).send(result)
        }).catch((error) =>{
            res.status(500).send(error)
        })
    }).catch((e)=>{
        res.status(401).send(e)
    })
}

module.exports = userUpdate;