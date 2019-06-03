/**
 * @api {post} /user/:id/bet/ create a bet
 * @apiName betCreate
 * @apiGroup Bet
 *
 * @apiHeader {String} x-auth User unique token, user token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 * 
 * @apiParam {Object[]} matchs that are in the cart.
 * @apiParam {Number} bet bet of the user.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *           "matchs" : [ 
 *               {
 *                   "matchid" : "5c530a65b328b6280cd4d1ae",
 *                   "participantchoice" : "5c530a65b328b6280cd4d1b0"
 *               },
 *               {
 *                   "matchid" : "5c373bd0cde84e428ce07d3d",
 *                   "participantchoice" : "5c373bd0cde84e428ce07d3e"
 *               }
 *           ],
 *           "bet" : 50
 *           
 *       }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "_id": "5ca70546c5b2eb31fc57330c",
 *           "userid": "5c3720c1bcdf441cb4375fc7",
 *           "matchs": [
 *               {
 *                   "_id": "5ca70546c5b2eb31fc57330e",
 *                   "matchid": "5c530a65b328b6280cd4d1ae",
 *                   "participantchoice": "5c530a65b328b6280cd4d1b0"
 *               },
 *               {
 *                   "_id": "5ca70546c5b2eb31fc57330d",
 *                   "matchid": "5c373bd0cde84e428ce07d3d",
 *                   "participantchoice": "5c373bd0cde84e428ce07d3e"
 *               }
 *           ],
 *           "bet": 50,
 *           "status": 0,
 *           "cotetotale": 2.52,
 *       }
 *
 */
var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');
var {User} = require('./../../Models/User');
var {onlyUser} = require('./../../middleware/authenticate');

const betCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;
    onlyUser(id, req.user._id).then(()=>{
        var newBet = new Bet({
            userid : id,
            matchs : body.matchs,
            bet : body.bet,
            status : 0
        })
        var coteTotale = 0;
        var matchs = body.matchs
        promises = [];
        for(var i = 0; i < matchs.length; i++){
            promises.push(new Promise((resolve, reject) =>{
                Match.findOne({ _id : matchs[i].matchid},{"participant" : {$elemMatch : {_id : matchs[i].participantchoice}}}).then((matchDetails) =>{
                    coteTotale += matchDetails.participant[0].coteparticipant;
                    resolve(coteTotale);
                }).catch((err) => {
                    reject(err);
                })
            }))     
        }
    
        Promise.all(promises).then(()=>{
            if(coteTotale > 0 ){
                newBet.cotetotale = coteTotale;
                User.findOne({_id: id}).then((user) =>{
                    if(user){
                        // verification si assez de monnaie
                        if(user.money - body.bet >= 0){
    
                            newBet.save().then(() =>{
                                // I/ deduction de l'argent
                                user.updateOne({$inc: {money: -body.bet}}, {new: true}).then(()=>{
                                    res.status(200).send(newBet);
                                })              
                            }).catch(() =>{
                                res.status(400).send({'error':'not saved'});
                            })
                        }
                        else
                        {
                            res.send({'error':'not enough money'});
                        }
                    }
                    else
                    {
                        res.send({'error':'no user found'});
                    }
                })  
            }
        }).catch((promisesErr)=>{
            res.send(promisesErr);
        })
    }).catch((e)=>{
        res.status(401).send(e)
    });
}

module.exports = betCreate;