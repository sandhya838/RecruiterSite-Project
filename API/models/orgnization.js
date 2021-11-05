'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Organizationschema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    contactNumber: {
        type: String
    },
    name: {
        type: String
    },
    logo: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    pinCode: {
        type: Number
    },
    country: {
        type: String
    },
    numberOfEmployees: {
        type: String
    },
    description: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date
    }
});

module.exports = mongoose.model('Organizations', Organizationschema);