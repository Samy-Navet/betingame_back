const {admin, authenticate} = require('./../middleware/authenticate');
const {matchVerify, verifyMatchBeforeBet} = require('./../controllers/match/matchVerify');
const betCreate = require('./../controllers/bet/betCreate');
const betDetails = require('./../controllers/bet/betDetails');
const {betUpdateStatus} = require('./../controllers/bet/betUpdateStatus');
const {betsList, userBetsList} = require('./../controllers/bet/betsList');


module.exports = (app) =>{
app.route('/bet')
    .get(betsList)
    
app.route('/user/:id/bet')
    .post(authenticate, verifyMatchBeforeBet, betCreate)
    .get(userBetsList)


app.route('/user/:id/bet/:betid')
    .put(admin, betUpdateStatus)
    .get(betDetails)
}


