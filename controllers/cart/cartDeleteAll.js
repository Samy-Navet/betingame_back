const cartDeleteAll = (req, res) => {
    var id = req.params.id;
    User.findById(id).then((user) =>{
        user.panier = [];
        User.findByIdAndUpdate(id,{$set: user}, {new: true}).then((result) =>{
            res.status(200).send(result)
        }).catch((err) =>{
            res.status(400).send()
        }) 
    })
};

module.exports = cartDeleteAll;