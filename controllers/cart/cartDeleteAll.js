/**
 * @api {delete} /user/:userid/cart/ delete all matchs from the cart
 * @apiName cartDeleteAll
 * @apiGroup Cart
 *
 * @apiHeader {String} x-auth User unique token, user or admin token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *           "_id": "5c607c56bb6b8e24f86f1c7a",
 *           "userid": "5c3720c1bcdf441cb4375fc7",
 *           "matchs": [],
 *           "__v": 0
 *       }
 * 
 *
 */
var {Cart} = require('./../../Models/Cart');
var {onlyUser} = require('./../../middleware/authenticate');

const cartDeleteAll = (req, res) => {
    var id = req.params.id;
    onlyUser(id, req.user._id).then(()=>{
        Cart.findOne({userid: id}).then((cart) =>{
            if(cart){
                cart.matchs = [];
                Cart.findOneAndUpdate({userid: id},{$set: cart}, {new: true}).then((result) =>{
                    res.status(200).send(result)
                }).catch((err) =>{
                    res.status(500).send(err)
                }) 
            }  
        })
    }).catch((e)=>{
        res.status(401).send(e)
    })
};

module.exports = cartDeleteAll;