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

const verifyMatchBeforeBet = (req, res, next) =>{
    var id = req.params.id;
    var body = req.body;
    var unavailable = false;
    var promises = [];
    body.matchs.forEach((matchItem, matchKey)=>{
        var promise = matchVerify(matchItem.matchid).then(()=>{
            unavailable = true;
        }).catch(()=>{
           
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
module.exports = {matchVerify, verifyMatchBeforeBet};