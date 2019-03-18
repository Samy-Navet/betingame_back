const betCreate = require('./../controllers/bet/betCreate');
const betDetails = require('./../controllers/bet/betDetails');
const betUpdateStatus = require('./../controllers/bet/betUpdateStatus');
const betsList = require('./../controllers/bet/betsList');


module.exports = (app) =>{
app.route('/user/:id/bet')
    .post(betCreate)
    .get(betsList)

app.route('/user/:id/bet/:betid')
    .put(betUpdateStatus)
    .get(betDetails)
}


