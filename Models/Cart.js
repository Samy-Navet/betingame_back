// import { Schema, SchemaType } from 'mongoose';
const {ObjectID} = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash')

var cartSchema = new mongoose.Schema({
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
    }]

}, {collection: 'cart'})

var Cart = mongoose.model('cart', cartSchema);

module.exports = {Cart};