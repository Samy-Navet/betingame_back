/**
 * @api {post} /user/login Login and request user information
 * @apiName userLogin
 * @apiGroup User
 *
 * @apiParam {String} username User username string.
 * @apiParam {String} password User password string.
 *
 * @apiSuccess {String} _id id of the User.
 * @apiSuccess {String} username username of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} admin state of the User.
 * @apiSuccess {Object[]} tokens array of tokens of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
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
 */
var {User} = require('./../../Models/User');

const userLogin = (req,res) =>{
    var username = req.body.username
    var password = req.body.password


    User.findByCredentials(username, password).then((user) => {
        return user.generateAuthToken().then((data) => {
          res.header('x-auth', data.token).send(data.user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
};

module.exports = userLogin;