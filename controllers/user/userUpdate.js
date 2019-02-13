var {User} = require('./../../Models/User');

const userUpdate = (req,res) =>{
    var id = req.params.id
    var body = req.body;

    if(req.user._id == id || req.user.admin === true){
        User.findByIdAndUpdate(id,{$set: body}, {new: true}).then((result) =>{
            res.status(200).send()
        }).catch((error) =>{
            res.status(400).send(error)
        })
    }
    else
    {
        res.status(401).send();
    }
    
}

module.exports = userUpdate;