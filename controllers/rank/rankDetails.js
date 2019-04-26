var {Rank} = require('./../../Models/Rank');
var {User} = require('./../../Models/User');
var _ = require('lodash');

const rankDetailByUser = (req, res) => {
    var userid = req.params.id
    Rank.findOne({userid}).select('-__v ').lean().then((rank)=>{
        User.findOne({_id: userid}).select('username').lean().then((user)=>{
            var username = user.username;
            rank.username = username;
            res.send(rank);
        }).catch((userErr)=>{

        })
    }).catch((rankErr)=>{

    })
    
}

const rankDetail = (req, res) => {
    var rankid = req.params.id
    Rank.findOne({_id: rankid}).select('-__v ').lean().then((rank)=>{
        User.findOne({_id: rank.userid}).select('username').lean().then((user)=>{
            var username = user.username;
            rank.username = username;
            res.send(rank);
        }).catch((userErr)=>{

        })
    }).catch((rankErr)=>{

    })
}

module.exports = {rankDetailByUser, rankDetail};