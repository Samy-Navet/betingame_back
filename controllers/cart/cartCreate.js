/**
 * @api {post} /match/ put a match in the cart
 * @apiName cartCreate
 * @apiGroup Cart
 *
 * @apiParam {String} matchid id of the match.
 * @apiParam {String} participantchoice id of the participant.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *           "matchid": "5c373bd0cde84e428ce07d3d",
 *           "participantchoice": "5c373bd0cde84e428ce07d3e"
 *       }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "_id": "5c607c56bb6b8e24f86f1c7a",
 *           "userid": "5c3720c1bcdf441cb4375fc7",
 *           "matchs": [
 *               {
 *                   "_id": "5ca61cc8c535b7034ce815b2",
 *                   "matchid": "5c373bd0cde84e428ce07d3d",
 *                   "participantchoice": "5c373bd0cde84e428ce07d3e"
 *               }
 *           ],
 *       }
 * 
 *
 */
var {Cart} = require('./../../Models/Cart');
var {onlyUser} = require('./../../middleware/authenticate');

const cartCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;

    onlyUser(id, req.user._id).then(()=>{
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
                    res.status(500).send()
                })
            }
            
        }).catch((e) =>{
            console.log(e);
            res.status(500).send(e);
        })
    }).catch((e)=>{
        res.status(401).send(e);
    })
} 

module.exports = cartCreate;