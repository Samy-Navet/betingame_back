const matchDetails = (req, res) =>{
    var id = req.params.id;
    Match.findById(id).then((match) =>{
        if(match){
            res.status(200).send(match)
        }
        else
        {
            res.status(404).send(null);
        }
    }).catch((e) =>{
        res.status(400).send(e);
    })
}

module.exports = matchDetails;