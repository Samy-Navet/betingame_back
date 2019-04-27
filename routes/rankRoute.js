const rankList = require('./../controllers/rank/rankList');
const rankDetails = require('./../controllers/rank/rankDetails');
 

module.exports = (app) => {
    app.route('/rank')
        .get(rankList);

    app.route('/rank/:rankid')
        .get(rankDetails.rankDetail);

    app.route('/user/:id/rank')
        .get(rankDetails.rankDetailByUser);
}