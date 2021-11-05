'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Jobschema = new Schema({
    title: {
        type: String
    },
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
        type: String,
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
        ref: 'Orgnizations',
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orgnizations',
    }
});

module.exports = mongoose.model('Jobs', Jobschema);