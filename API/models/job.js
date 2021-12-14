'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Jobschema = new Schema({
    organizationName: {
        type: String
    },
    description: {
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
    location: {
        type: []
    },
    experiance:{
        type: []
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
    skills:{
        primary:{
            type:[]
        },
        secondary:{
            type:[]
        }
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