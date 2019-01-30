const cartCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;
    User.findById(id).then((user) =>{
        for(var element in user.panier){
            if(user.panier[element].nomdumatch == body.nomdumatch){
                var exist = true;
                break;
            }
        };
    
        if(typeof exist === 'undefined' || exist !== true){
            user.panier.push(body);
            User.findByIdAndUpdate(id,{$set: user}, {new: true}).then((result) =>{
                res.status(200).send(result)
            }).catch((err) =>{
                res.status(400).send()
            })   
        }
        else
        {
            res.status(403).send();
        }
    }).catch((e) =>{
        console.log(e);
        res.status(400).send(e);
    })
} 

module.exports = cartCreate;