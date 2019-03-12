var {Bet} = require('./../../Models/Bet');
var {Match} = require('./../../Models/Match');

const betCreate = (req,res) => {
    var body = req.body;
    var id = req.params.id;

    var newBet = new Bet({
        userid : id,
        matchs : [body.matchs],
        bet : body.bet,
        status : 0
    })

    var coteTotale = 0;
    var matchs = body.matchs
    for(var i = 0; i < matchs.length; i++){
        Match.findOne({_id : matchs[i].id, 'participant._id': matchs[i].participantchoice}).then((matchDetails) =>{
            coteTotale += matchDetails.participantchoice;
        }).catch((e) => {
            res.send(e);
        })
    }

    if(coteTotale > 0 ){
        newBet.cotetotale = coteTotale;

        newBet.save().then(() =>{
            res.status(200).send(newCart);
        }).catch(() =>{
            res.send('not saved');
        })
    }
    
}

module.exports = betCreate;