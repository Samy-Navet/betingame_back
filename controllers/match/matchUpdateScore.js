var {Match} = require('./../../Models/Match');

const matchUpdateScore = (req,res) => {
    var id = req.params.id
    var body = req.body

    Match.findOne({_id : id}).lean().then((match) =>{
        if(match){
            if(match.api_match_id){

            }
            else
            {
                match.state = body.state;
                match.winner = body.winner;
                match.participant[0].score = body.participant[0];
                match.participant[1].score = body.participant[1];
                // res.send(match);
                Match.updateOne({_id : id}, {$set: match}, {new: true}).then((result)=>{
                    res.status(200).send(result);
                }).catch((updateErr)=>{
                    res.status(500).send(updateErr);
                })
            }
        }else{
            res.status(404).send();
        }
    }).catch((err)=>{
        res.status(500).send(err);
    })
};

module.exports = matchUpdateScore;