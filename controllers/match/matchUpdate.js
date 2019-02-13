var {Match} = require('./../../Models/Match');

const matchUpdate = (req,res) => {
    var id = req.params.id
    var body = req.body
    Match.findByIdAndUpdate(id,{$set: body}, {new: true}).then((result) =>{
        if(result){
            res.status(200).send()
        }
        else
        {
            res.status(404).send()  
        }

    }).catch((err) =>{
        res.status(400).send()
    })
};

module.exports = matchUpdate;