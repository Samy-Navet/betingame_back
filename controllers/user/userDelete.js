const userDelete = (req, res) => {
    var id = req.params.id
    if(req.user._id == id || req.user.admin == true){
        User.deleteOne({_id: id}).then(() =>{
            res.status(200).send();
        }).catch((e) =>{
            res.status(400).send(e);
        })
    }
    else
    {
        res.status(401).send();
    }
}

module.exports = {userDelete};