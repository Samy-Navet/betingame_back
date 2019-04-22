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
var {Rank} = require('./../../models/Rank');


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
        // console.log(user);
        
        var userRank = new Rank({
            userid: user._id
        })
        // creation des data rank
        userRank.save().then(()=>{
            res.header('x-auth', data.token).send(user);
        })
    }).catch((e) => {
        res.status(500).send(e);
    })
};

module.exports = userRegister;