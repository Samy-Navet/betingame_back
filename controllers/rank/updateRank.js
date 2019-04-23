const {Rank} = require('./../../Models/Rank');
const {Bet} = require('./../../Models/Bet');

const updateAllRanksStats = () =>{
    var now = Date.now()
    Rank.find({}).then((rank)=>{
        rank.forEach((userRank, rankIndex)=>{
            updateRankStats(userRank.userid);
        })
    })
}

const updateRankAfterBet = (id_user, betStatus, betCote, bet) => {
    if(betStatus === 2){
        Rank.findOneAndUpdate({userid: id_user},{score: (betCote * bet)}).then((userRank)=>{
            updateRankStats(id_user);
        })
    }
    else
    {
        updateRankStats(id_user);
    }
    

}

const updateRankStats = (id_user)=>{
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
        Rank.updateOne({userid: id_user}, {
            'betsNumber': betsNumber, 
            'wonBets': wonBets, 
            'canceledBets': canceledBets, 
            'betAverage': betAverage,
            'coteAverage': coteAverage,
            'updatedAt': now
        }).then(()=>{

        }).catch((err)=>{

        })
    })
}

module.exports = updateRankAfterBet;