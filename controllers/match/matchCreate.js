const matchCreate = (req, res) =>{
    var date = req.body.datematch
    var title = req.body.title
    var participants = req.body.participant
    var game = req.body.game
    var match = new Match({
        title: title,
        game: game,
        dates: {
            matchdate: new Date(date)
        },
        participant: participants
    })  
   
    match.save().then((result) =>{
        res.status(200).send();
    }).catch((e) => {
        res.status(400).send(e);
    })
}

module.exports = matchCreate;