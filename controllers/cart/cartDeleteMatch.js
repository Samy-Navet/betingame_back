var {User} = require('./../../Models/User');

const cartDeleteMatch = (req,res) =>{
    var id = req.params.id;
    var match = req.params.match;
    User.findByIdAndUpdate(id,{$pull:{'panier': {'_id': match}}},{new: true}).then((user) =>{
        res.status(200).send(user);
    })
    .catch((err) =>{
        res.status(400).send();
    })
}

module.exports= cartDeleteMatch;