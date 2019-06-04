/**
 * @api {post} /user/login Login and get user information
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
 * @apiSuccess {Number} Money Money of the user.
 * @apiSuccess {Object} stats object of stats of the User.
 *
 * @apiSuccessExample {json} Success-Header:
 *       { "x-auth": "azd546sdsz54_XadfDrf645" }
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
 *           "score": 60,
 *           "betsNumber": 1,
 *           "wonBets": 1,
 *           "canceledBets": 0,
 *           "coteAverage": 3,
 *           "betAverage": 20,
 *           "updatedAt": "2019-06-01T12:29:42.705Z"
 *       }
 *   }
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
        res.status(401).send();
    });
};

module.exports = userLogin;