'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FeedBackSchema = new Schema({
    primarySkillRating1: { type: String },
    primarySkillRating2: { type: String },
    primarySkillRating3: { type: String },
    primarySkillRating4: { type: String },
    secondarySkillRating1: { type: String },
    secondarySkillRating2: { type: String },
    secondarySkillRating3: { type: String },
    secondarySkillRating4: { type: String },
    consultantRating: { type: String },
    techLeadRating: { type: String },
    architectRating: { type: String },
    communicationSkillRating: { type: String },
    presentationSkillRating: { type: String },
    motivationSkillRating: { type: String },
    flexibilitySkillRating: { type: String },
    professionalSkillRating: { type: String },
    candidateName: {
        type: String
    },
    interviewerName: { type: String },
    candidateID: { type: String },
    priamrySkillComments: { type: String },
    secondarySkillComments: { type: String },
    primarySkill1: { type: String },
    secondarySkill1: { type: String },
    secondarySkill2: { type: String },
    secondarySkill3: { type: String },
    secondarySkill4: { type: String },
    primarySkill4: { type: String },
    primarySkill2: { type: String },
    primarySkill3: { type: String },
    summary: { type: String },
    management: { type: String },
    technical: { type: String },
    functional: { type: String },

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
        type: String,
    },
    interviewerID: {
        type: String
    }
});

module.exports = mongoose.model('Feedback', FeedBackSchema);