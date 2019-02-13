var {Cart} = require('./../../Models/Cart');

const cartCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;
    Cart.findOne({userid: id}).then((cart) =>{
        if(cart){
            for(var element in cart.matchs){
                if(cart.matchs[element].matchid == body.matchid){
                    var exist = true;
                    break;
                }
            };
        
            if(typeof exist === 'undefined' || exist !== true){
                cart.matchs.push(body);
                // ICI
                Cart.findOneAndUpdate({userid: id},{$set: cart}, {new: true}).then((result) =>{
                    res.status(200).send(result)
                }).catch((err) =>{
                    res.status(400).send()
                })   
            }
            else
            {
                res.status(403).send();
            }
        }
        else
        {
            var newCart = new Cart({
                userid: id,
                matchs: [{
                    matchid : body.matchid,
                    participantchoice : body.participantchoice
                }]
            });
        
            newCart.save().then(() =>{
                res.status(200).send(newCart);
            }).catch(() =>{
                res.status(400).send()
            })
        }
        
    }).catch((e) =>{
        console.log(e);
        res.status(400).send(e);
    })
} 

module.exports = cartCreate;