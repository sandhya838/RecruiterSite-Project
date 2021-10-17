'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Userschema = new Schema({
  fullName: {
    type: String
  },
  handle:{
    type: String
  },
  email: {
    type: String
  },
  mobileNumber: {
    type: Number,
  },
  city: {
    type: String
  },
  password: {
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
    ref: 'User',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  role: {
    type: String,
    enum: ['Sumeradmin', 'Owner', 'User'],
  }
});

module.exports = mongoose.model('Users', Userschema);