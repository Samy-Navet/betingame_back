const {authenticate} = require('./../middleware/authenticate');
const userDelete = require('./../controllers/user/userDelete');
const userDetails = require('./../controllers/user/userDetails');
const userList = require('./../controllers/user/userList');
const userLogin = require('./../controllers/user/userLogin');
const userLogout = require('./../controllers/user/userLogout');
const userRegister = require('./../controllers/user/userRegister');
const userUpdate = require('./../controllers/user/userUpdate');
const userRankList = require('./../controllers/user/userRankList');


module.exports = (app) =>{
app.route('/user')
    .get(userList)
    .post(userRegister);

// user list for ranks
app.route('/user/rank')
    .get(userRankList);

app.route('/user/:id')
    .get(authenticate, userDetails)
    .put(authenticate, userUpdate)
    .delete(authenticate, userDelete)

app.route('/user/login')
    .post(userLogin)

app.route('/user/:id/logout')
    .delete(authenticate, userLogout)

}

