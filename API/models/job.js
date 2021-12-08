'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Jobschema = new Schema({
    companyName: {
        type: String
    },
    companyIntro: {
        type: String
    },
    typeOfJob: {
        contract:{
            type:Boolean
        },
        permanant:{
            type:Boolean
        },
       freelance:{
            type:Boolean
        }
    },
    locationpreference: {
        type: String
    },
    roleProfile: {
        management:{
            type:String
        },
        technical:{
            type:String
        },
        functional:{
            type:String
        },
    },
    role: {
        type: String
    },
    skills: {
        type: String
    },
    orgnizationId:{
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orgnizations',
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orgnizations',
    }
});

module.exports = mongoose.model('Jobs', Jobschema);