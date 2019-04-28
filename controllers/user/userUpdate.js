var {User} = require('./../../Models/User');
var {adminOrUser} = require('./../../middleware/authenticate');

const userUpdate = (req,res) =>{
    var id = req.params.id
    var body = req.body;
    adminOrUser(id, req.user._id).then(()=>{
        User.findOneAndUpdate({_id: id},{$set: body}, {new: true}).then((result) =>{
            res.status(200).send(result)
        }).catch((error) =>{
            res.status(500).send(error)
        })
    }).catch((e)=>{
        res.status(401).send(e)
    })
}

module.exports = userUpdate;