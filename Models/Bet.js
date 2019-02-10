const {ObjectID} = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash')

var betSchema = new mongoose.Schema({
    userid : {
        type: String,
        required: true
    },

    matchs : [{
        matchid : {
            type: String,
            required: true
        },

        participantchoice : {
            type : String,
            required : true
        }
    }],

    bet: {
        type: Number,
        required: true
    },

    status : {
        type : Number,
        required: true
    }

});

var Bet = mongoose.model('bet', betSchema);

module.exports = {Bet};