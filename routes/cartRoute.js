const cartCreate = require('./../controllers/cart/cartCreate');
const cartDeleteAll = require('./../controllers/cart/cartDeleteAll');
const cartDeleteMatch = require('./../controllers/cart/cartDeleteMatch');



module.exports = (app) =>{
app.route('/user/:id/cart')
    .post(cartCreate)
    .delete(cartDeleteAll)

app.route('/user/:id/cart/:match')
    .delete(cartDeleteMatch)

}


