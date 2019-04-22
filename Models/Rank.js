const mongoose = require('mongoose')


var RankSchema = new mongoose.Schema({
    userid : {
        type: String,
        required: true
    },

    updatedAt: {
        type: Date,
        default: Date.now 
    },

    score: {
        type: Number,
        required: true,
        default: 0
    },

    betsNumber: {
        type: Number,
        default: 0,
        required : true
    },

    wonBets: {
        type: Number,
        default: 0,
        required: true
    },

    canceledBets: {
        type: Number,
        default: 0,
        required: true
    },

    coteAverage: {
        type: Number,
        default: 0,
        required: true
    },

    bestBet:{
        type: String,

    }

}, {collection: 'rank'})


RankSchema.pre('save', function preSave(next){
    var rank = this;
    rank.updatedAt = Date.now();
    next();
  });

var Rank = mongoose.model('rank', RankSchema);


module.exports = {Rank}