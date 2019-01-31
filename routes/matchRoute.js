const authenticate = require('./../middleware/authenticate');
const admin = require('./../middleware/adminAuthenticate');
const matchList = require('./../controllers/match/matchList');
const matchDetails = require('./../controllers/match/matchDetails');
const matchCreate = require('./../controllers/match/matchCreate');
const matchUpdate = require('./../controllers/match/matchUpdate');
const matchDelete = require('./../controllers/match/matchDelete');



module.exports = (app) => {
    app.route('/match')
    .get(authenticate, matchList)
    .post(admin, matchCreate);

app.route('/match/:id')
    .get(authenticate, matchDetails)
    .put(admin, matchUpdate)
    .delete(admin, matchDelete)
}

