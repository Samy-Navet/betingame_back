/**
 * @api {delete} /user/:id/logout/ Disconnect user from the app
 * @apiName userLogout
 * @apiGroup User
 *
 * @apiHeader {String} x-auth User unique access-key.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    
 *
 */
var {User} = require('./../../Models/User');
var {adminOrUser} = require('./../../middleware/authenticate');

const userLogout = (req,res) =>{
    var id = req.params.id;
    adminOrUser(id, req.user._id).then(()=>{
        req.user.removeToken(req.token).then(() =>{
            res.status(200).send();
        }, (err) =>{
            res.status(500).send(err);
        })
    }).catch((e)=>{
        res.status(401).send(e);
    })
}

module.exports = userLogout;