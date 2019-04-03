var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/betingame_test' || 'mongodb://localhost:27017/betingame_test',{ useNewUrlParser: true, useCreateIndex: true }).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
})

module.exports = {mongoose};