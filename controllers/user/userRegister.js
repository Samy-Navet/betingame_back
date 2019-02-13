var {User} = require('./../../Models/User');

const userRegister = (req, res) =>{
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var admin = req.body.admin

    var user = new User({
        username: username,
        email: email,
        password: password
    });
    if(admin != null){
        user.admin = admin
    }
    user.save().then(() =>{
        return user.generateAuthToken()
    }).then((data) =>{
        res.header('x-auth', data.token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
};

module.exports = userRegister;