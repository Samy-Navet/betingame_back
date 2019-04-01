const {ObjectID} = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash')

mongoose.Promise = global.Promise;

var MatchSchema = new mongoose.Schema({
    api_match_id : {
        type : Number
    },
    dates: {
        time: { 
            type : Date,
            default: Date.now 
        },
        matchdate: {
            type : Date,
            required: true
        }    
    },
    title: {
        type: String,
        required: true
    },
    game: {
        type: String,
        default: null
    },

    state : {
        type: Number,
        required: true,
        default: 0
    },
    winner : {
        type : String 
    },
    participant: [{
        participant_api_id : {
            type : Number
        },
        participantnom: {
            type: String
        },
        coteparticipant: {
            type: Number
        },
        score: {
            type: Number,
            required: true,
            default : 0
        }
    }]
}, {collection: 'match'});



var Match = mongoose.model('match', MatchSchema);

// var match1 = new Match({
//     title: "FNC VS IG",
//     game: "League of Legends",
//     dates: {
//         matchdate: new Date('2018-11-03T06:30:00')
//     },
//     participant: [{
//         // _participant: new ObjectID(),
//        participantnom: 'Fnatic',
//        coteparticipant: 2.20 
//     },
//     {
//         // _participant: new ObjectID(),
//         participantnom: 'Invictus Gaming',
//         coteparticipant: 1.90
//     }]
// })

// match1.save().then((res) =>{
//     console.log(res);

// }).catch((e) => {
//     console.log(e);
// })

module.exports = {Match}