const authenticate = require('./../middleware/authenticate');
const userList = require('./../controllers/user/userList');
const userRegister = require('./../controllers/user/userRegister');
const userDetails = require('./../controllers/user/userDetails');


module.exports = (app) =>{
    app.route('/user')
    .get(userList)
    .post(userRegister);

app.route('/user/:id')
    .get(authenticate, userDetails)
    .put(authenticate, updateUser)
    .delete(authenticate, userDelete)

// app.route('/user/login')
//     .post(userLogin)

// app.route('/user/:id/logout')
//     .delete(userLogout)

}

