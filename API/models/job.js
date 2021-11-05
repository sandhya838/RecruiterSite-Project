'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Jobschema = new Schema({
    jobType: {
        type: String
    },
    skills: {
        type: []
    },
    location: {
        type: []
    },
    experience: {
        type: Number,
    },
    salary: {
        type: String
    },
    roles: {
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
        ref: 'Organization',
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
    }
});

module.exports = mongoose.model('Jobs', Jobschema);