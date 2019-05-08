var {Cart} = require('./../../Models/Cart');
var {Match} = require('./../../Models/Match');

const matchVerify = (id_match) =>{
    return new Promise((resolve, reject)=>{
        Match.findOne({_id: id_match}).then((match)=>{
            if(match){
                if(match.state !== 0){
                    resolve();
                } else {
                    reject();
                }
            } else {
                resolve();
            }
        }).catch((matchErr)=>{
            reject();
        })
    })
}

const suppressMatchFromCart = (req, res, next) =>{
    var id = req.params.id; 
    var promises = [];
    Cart.findOne({'userid' : id}).select('-__v').lean().then((cart) =>{
        cart.matchs.forEach((matchItem, matchKey) => { 
            var promise = matchVerify(matchItem.matchid).then(()=>{
                // suppression du match du panier
                Cart.findOneAndUpdate({userid : id},{$pull:{'matchs': {'matchid': matchItem.matchid}}},{new: true}).then((newCart)=>{
                    // mettre en place un futur systeme de log
                })
            }).catch(()=>{
                // match OK
                // mettre en place un futur systeme de log
            })
            promises.push(promise);
        });

        Promise.all(promises).then(()=>{
            next();
        })
    });
}

const verifyMatchBeforeBet = (req, res, next) =>{
    var id = req.params.id;
    var body = req.body;
    var unavailable = false;
    var promises = [];
    body.matchs.forEach((matchItem, matchKey)=>{
        var promise = matchVerify(matchItem.matchid).then(()=>{
            // suppression du match du panier
            unavailable = true;
            Cart.findOneAndUpdate({userid : id},{$pull:{'matchs': {'matchid': matchItem.matchid}}},{new: true}).then((newCart)=>{
                // mettre en place un futur systeme de log
            })
        }).catch(()=>{
            // match OK
            // mettre en place un futur systeme de log
        })
        promises.push(promise);
    })

    Promise.all(promises).then(()=>{
        if(!unavailable){
            next();
        } else {
            res.status(400).send({'warning':'one or multiple match are unavailable to bet on !'})
        }

    })
}
module.exports = {matchVerify, suppressMatchFromCart, verifyMatchBeforeBet};