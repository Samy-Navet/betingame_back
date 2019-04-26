var {Rank} = require('./../../Models/Rank');
var {User} = require('./../../Models/User');
var _ = require('lodash');

const rankList = (req, res) => {
    Rank.find({}).select('-__v').sort([['score','-1']]).lean().then((ranks)=>{
        var ranksList = ranks;
        let userQuery = []
        for(var i = 0; i < ranks.length; i++){
            userQuery.push(ranks[i].userid);
        }
        User.find({_id: {$in: userQuery}}).select('-__v').lean().then((users)=>{
            var myRank = null
            ranks.forEach((rankItem, rankKey) => {
                users.forEach((userItem,userRank)=>{
                    if(rankItem.userid == userItem._id){
                        var rankusername = _.pick(userItem, ['username'])
                        ranksList[rankKey].username = rankusername.username;

                        if(req.query.id && req.query.id == rankItem.userid){
                            console.log('in')
                            var myusername = _.pick(userItem, ['username']);
                            myRank = rankItem;
                            myRank.username = myusername.username
                        }
                    }
                })
            });
            res.json({'myRank': myRank,'ranking':ranksList});
        }).catch((userErr)=>{
            res.status(500);
        })
    }).catch((ranksErr)=>{
        res.status(500);
    })
}

module.exports = rankList;