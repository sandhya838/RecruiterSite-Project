'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FeedBackSchema = new Schema({
    interviewerName: {
        type: String
    },
    priamrySkillComments: {
        type: String
    },
    secondarySkillComments: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date
    },
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
    },
});

module.exports = mongoose.model('Feedback', FeedBackSchema);