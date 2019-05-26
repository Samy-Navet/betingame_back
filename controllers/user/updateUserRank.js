var {User} = require('./../../Models/User');
const {Bet} = require('./../../Models/Bet');

const updateAllRanksStats = () =>{
    var now = Date.now()
    User.find({}).then((user)=>{
        user.forEach((userRank, rankIndex)=>{
            updateRankStats(userRank.userid);
        })
    })
}

const updateRankAfterBet = (id_user, betStatus, betCote, bet) => {
    if(betStatus === 2){
        User.findOneAndUpdate({_id: id_user},{$inc: {'stats.score': (betCote * bet)}}).then((userRank)=>{
            updateRankStats(id_user);
        })
    }
    else
    {
        updateRankStats(id_user);
    }
    

}

const updateRankStats = (id_user)=>{
    var now = Date.now()
    let betsNumber = 0;
    let wonBets = 0;
    let canceledBets = 0;
    let coteSum = 0;
    let betSum = 0;
    Bet.find({userid: id_user}).then((userBets)=>{
        userBets.forEach((userBet,betIndex)=>{
            betsNumber++;
            if(userBet.status === 2){
                wonBets++;
            } else if(userBet.status === 3){
                canceledBets++;
            }
            betSum = betSum + userBet.bet;
            coteSum = coteSum + userBet.cotetotale;
            
        })
        let coteAverage = coteSum / betsNumber;
        let betAverage = betSum / betsNumber;
        User.updateOne({_id: id_user}, {
            'stats.betsNumber': betsNumber, 
            'stats.wonBets': wonBets, 
            'stats.canceledBets': canceledBets, 
            'stats.betAverage': betAverage,
            'stats.coteAverage': coteAverage,
            'stats.updatedAt': now
        }).then(()=>{
            // futurs logs
        })
    })
}

module.exports = {updateRankAfterBet,updateAllRanksStats,updateRankStats};