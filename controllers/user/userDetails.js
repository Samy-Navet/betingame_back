/**
 * @api {get} /user/:id request user information
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
 * @apiSuccess {Object[]} tokens array of tokens of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *           {
 *           "_id": "5ca3169662ca77093cc91f22",
 *           "username": "toto",
 *           "email": "toto@gmail.com",
 *           "admin": false,
 *           "tokens": [
 *               {
 *                   "access": "auth",
 *                   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *               }
 *           ]
 *       }
 *       
 * 
 */
var {User} = require('./../../Models/User');
const userDetails = (req,res) =>{
    var id = req.params.id
    if(req.user._id == id){
        res.send(req.user);
    }
    else
    {
        res.status(401).send();
    }
}

module.exports = userDetails;