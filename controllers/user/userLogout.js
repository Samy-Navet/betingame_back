const userLogout = (req,res) =>{
    var id = req.params.id;
    if(req.user._id == id){
        req.user.removeToken(req.token).then(() =>{
            res.status(200).send();
        }, () =>{
            res.status(400).send();
        })
    }
    else
    {
        res.status(401).send();
    }
}

module.exports = {userLogout};