var {Cart} = require('./../../Models/Cart');
var {Match} = require('./../../Models/Match');
var {onlyUser} = require('./../../middleware/authenticate');
var _ = require('lodash');

const cartDetails = (req,res) =>{
    var id = req.params.id;
    onlyUser(id, req.user._id).then(()=>{
        Cart.findOne({'userid' : id}).select('-__v').lean().then((cart) =>{
            var matchs = cart.matchs;
            matchQuery = [];
            for(var i = 0; i < matchs.length; i++){
                matchQuery.push(matchs[i].matchid);
            }
            
            Match.find({_id : {$in : matchQuery}}).lean().then((matchDetails) =>{
                result = [];
                for(var i = 0; i < matchs.length; i++){
                    result.push({...matchs[i], ... _.pick(matchDetails.find(b => b._id == matchs[i].matchid), ['game','title','dates','participant'])});
                }
    
                res.status(200).send(result);
    
            })
        })
        .catch((err) =>{
            res.status(500).send();
        })
    }).catch((e)=>{
        res.status(401).send(e);
    })
}


module.exports = cartDetails;