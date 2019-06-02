/**
 * @api {post} /user/ Register and request user information
 * @apiName userRegister
 * @apiGroup User
 *
 * @apiParam {String} username User username string.
 * @apiParam {String} password User password string.
 * @apiParam {String} email User email string.
 * @apiParam {Boolean} admin Users state boolean.
 *
 * @apiSuccess {String} _id id of the User.
 * @apiSuccess {String} username username of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} admin state of the User.
 * @apiSuccess {Object[]} tokens array of tokens of the User.
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

const userRegister = (req, res) =>{
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var admin = req.body.admin

    var user = new User({
        username: username,
        email: email,
        password: password,
        money: 500
    });
    if(admin != null){
        user.admin = admin
    }
    user.save().then(() =>{
        return user.generateAuthToken()
    }).then((data) =>{
        res.header('x-auth', data.token).send(user);
    }).catch((e) => {
        res.status(500).send(e);
    })
};

module.exports = userRegister;