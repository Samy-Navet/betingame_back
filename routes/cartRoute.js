const {authenticate} = require('./../middleware/authenticate');
const {matchVerify, suppressMatchFromCart} = require('./../controllers/match/matchVerify');
const cartCreate = require('./../controllers/cart/cartCreate');
const cartDeleteAll = require('./../controllers/cart/cartDeleteAll');
const cartDeleteMatch = require('./../controllers/cart/cartDeleteMatch');
const cartDetails = require('./../controllers/cart/cartDetails');



module.exports = (app) =>{
app.route('/user/:id/cart')
    .post(authenticate, cartCreate)
    .delete(authenticate, cartDeleteAll)
    .get(authenticate, suppressMatchFromCart, cartDetails)

app.route('/user/:id/cart/:match')
    .delete(authenticate, cartDeleteMatch)

}


