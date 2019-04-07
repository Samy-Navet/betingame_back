const cartCreate = require('./../controllers/cart/cartCreate');
const cartDeleteAll = require('./../controllers/cart/cartDeleteAll');
const cartDeleteMatch = require('./../controllers/cart/cartDeleteMatch');
const cartDetails = require('./../controllers/cart/cartDetails');



module.exports = (app) =>{
app.route('/user/:id/cart')
    .post(cartCreate)
    .delete(cartDeleteAll)
    .get(cartDetails)

app.route('/user/:id/cart/:match')
    .delete(cartDeleteMatch)

}


