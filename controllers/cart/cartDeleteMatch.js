var {Cart} = require('./../../Models/Cart');

const cartDeleteMatch = (req,res) =>{
    var id = req.params.id;
    var match = req.params.match;
    Cart.findOneAndUpdate({userid : id},{$pull:{'matchs': {'matchid': match}}},{new: true}).then((user) =>{
        res.status(200).send(user);
    })
    .catch((err) =>{
        res.status(400).send();
    })
}

module.exports= cartDeleteMatch;