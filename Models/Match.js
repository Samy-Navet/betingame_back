const mongoose = require('mongoose');

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
        type : String,
        default: null
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
        },
        logo:{
            type: String
        }
    }]
}, {collection: 'match'});



var Match = mongoose.model('match', MatchSchema);

module.exports = {Match}