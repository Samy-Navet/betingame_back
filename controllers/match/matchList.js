var {Match} = require('./../../Models/Match');
const matchList = (req, res) =>{
    Match.find().then((matchs) =>{
        if(matchs){
            res.status(200).send(matchs)
        }
        else
        {
            res.status(404).send(null)
        }

    }).catch((e) =>{
        res.status(400).send(e);
    })
};

module.exports = matchList;