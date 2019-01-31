var {Match} = require('./../../Models/Match');

const matchDelete = (req,res) =>{
    var id = req.params.id;

     Match.deleteOne({_id: id}).then((result) =>{
         res.status(200).send();
     }).catch((err) =>{
         res.status(400).send();
     })
};

module.exports = matchDelete;