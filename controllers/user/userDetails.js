var {User} = require('./../../Models/User');
const userDetails = (req,res) =>{
    var id = req.params.id
    if(req.user._id == id){
        res.send(req.user);
    }
    else
    {
        res.status(401).send();
    }
}

module.exports = userDetails;