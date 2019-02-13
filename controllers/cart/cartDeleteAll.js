var {Cart} = require('./../../Models/Cart');

const cartDeleteAll = (req, res) => {
    var id = req.params.id;
    Cart.findOne({userid: id}).then((cart) =>{
        if(cart){
            cart.matchs = [];
            Cart.findOneAndUpdate({userid: id},{$set: cart}, {new: true}).then((result) =>{
                res.status(200).send(result)
            }).catch((err) =>{
                res.status(400).send()
            }) 
        }  
    })
};

module.exports = cartDeleteAll;