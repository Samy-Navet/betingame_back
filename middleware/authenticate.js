var {User} = require('./../Models/User')
const authenticate = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            res.status(401).send('token non existant')
        }else{
            req.user = user;
            req.token = token;
            next();
        }
        
    }).catch((e) =>{
        res.status(401).send();
    })
}

const adminOrUser = (user, token_user) => {
    return new Promise((resolve, reject)=>{
        if(user == token_user){
            resolve();
        } else {
            // admin 
            User.findOne({_id: token_user}).then((user_properties)=>{
                if(user_properties.admin === true){
                    resolve();
                } else {
                    reject('vous êtes ni le user concerné ni un admin');
                }
            }).catch((e) => {reject(e)})
        }
    })

}

const onlyUser = (user, token_user) => {
    return new Promise((resolve, reject)=>{
        if (token_user == user){
            resolve();
        } else {
            reject('vous n\'êtes pas l\'utilisateur concerné');
        }
    })
}

const admin = (req, res, next) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if(!user){
            return Promise.reject();
        }

        if(user.admin === false){
            return Promise.reject('vous n\'avez pas les droits nécéssaires');
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) =>{
        res.status(401).send(e);
    })
}
module.exports = {authenticate, adminOrUser, onlyUser, admin};