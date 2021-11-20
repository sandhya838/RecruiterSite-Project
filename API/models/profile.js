'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProfileSchema = new Schema({
  title: {
    type: String
  },
  location: {
    type: []
  },
  skills: {
    type: []
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
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  nationality: {
    type: String
  },
  currentNationality: {
    type: String
  },
  previousNationality: {
    type: String
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
      Country: {
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
      }
    }
  ],
  workExperiences: [
    {
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