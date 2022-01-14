'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProfileSchema = new Schema({
  countryCode:{
    type: String
  },
  title: {
    type: String
  },
  location: {
    type: []
  },
  skills: {
    type: []
  },
  role: {
    type: String
  },
  isProfileUpdated: {
    type: Boolean
  },
  email: {
    type: String,
    unique: true,
  },
  mobileNumber: {
    type: Number,
    unique: true
  },
  password: {
    type: String,
  },
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  resume: {
    type: String,
  },
  lastName: {
    type: String
  },
  countryOfLiving: {
    type: []
  },
  state: {
    type: []
  },
  city: {
    type: []
  },
  nationality: {
    type: []
  },
  currentNationality: {
    type: []
  },
  previousNationality: {
    type: []
  },
  totalYearsOfExperience: {
    type: String
  },
  teamSize: {
    type: Number,
  },
  volumeOfBusinessManged: {
    type: String
  },
  noticePeriod: {
    type: String
  },
  salary: {
    type: String
  },
  baseSalary: {
    type: String
  },
  variableSalary: {
    type: String
  },
  otherComponent: {
    type: String
  },
  industryServed: {
    type: String
  },

  roleManagement: {
    management: { type: String },
    portfolio: { type: String },
    account: { type: String },
    project: { type: String },
  },
  roleTechnical: {
    technical: { type: String },
    architect: { type: String },
    techLead: { type: String },
    developer: { type: String },
  },
  roleFunctional: {
    functional: { type: String },
    sme: { type: String },
    leadCon: { type: String },
    consultant: { type: String },
  },
  skillSysAdministration: {
    type: []
  },
  skillTechnical: {
    type: []
  },
  skillFunctional: {
    type: []
  },
  educationalDetails: [
    {
      degree: {
        type: String,
      },
      country: {
        type: String,
      },
      institute: {
        type: String
      },
      grade: {
        type: String
      },
      yearofPassing: {
        month: { type: String },
        year: { type: String },
      },
    }
  ],
  certifications: [
    {
      name: {
        type: String,
      },
      year: {
        type: String,
      },
      month: {
        type: String,
      },
      certificate: {
        type: String
      }
    }
  ],
  workExperiences: [
    {
      isCurrentCompany: {
        type: String
      },
      companyName: {
        type: String,
      },
      from: {
        type: String,
      },
      to: {
        type: String,
      },
      designation: {
        type: String,
      },
      skills: {
        type: [],
      },
      deliverables: {
        type: String
      },
      role: {
        type: String
      }
    }
  ],

  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },

});

module.exports = mongoose.model('Profile', ProfileSchema);