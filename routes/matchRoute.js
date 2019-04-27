const {authenticate, admin} = require('./../middleware/authenticate');
// const admin = require('./../middleware/adminAuthenticate');
const matchList = require('./../controllers/match/matchList');
const matchDetails = require('./../controllers/match/matchDetails');
const matchCreate = require('./../controllers/match/matchCreate');
const matchUpdate = require('./../controllers/match/matchUpdate');
const matchUpdateScore = require('./../controllers/match/matchUpdateScore');
const matchDelete = require('./../controllers/match/matchDelete');



module.exports = (app) => {
    app.route('/match')
    .get(matchList)
    .post(admin, matchCreate);

    app.route('/match/:id')
        .get(matchDetails)
        .put(admin, matchUpdate)
        .delete(admin, matchDelete);

    app.route('/match/:id/score/')
        .put(admin, matchUpdateScore)

}

