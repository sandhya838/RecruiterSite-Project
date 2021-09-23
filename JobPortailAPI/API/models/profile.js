'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProfileSchema = new Schema({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
  Country: {
    type: String
  },
  State: {
    type: String
  },
  City: {
    type: String
  },
  Nation: {
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
  timeSize: {
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
  indServed: {
    type: String
  },
 
  roleManagement: {
    type: String
  },
  roleTechnical: {
    type: String
  },
  roleFunctional: {
    type: String
  },
  skillSysAdministration: {
    type: String
  },
  skillTechnical: {
    type: String
  },
  skillFunctional: {
    type: String
  },
  educationalDetails: [
    {
      degree: {
        type: String,
      },
      Country:{
        type:String
      },
      institute:{
        type:String
      },
      grade:{
        type:String
      },
      yearofPassing: 
        {
          month: {
            type: String,
          },
          year: {
            type: String,
          }
        }
      
    }

  ],
  
 
  
  // institute:{
  //   type:String
  // },
  certifications: [
    {
      CertificationName: {
        type: String,
      },
      certifiedMonth: {
        type: String,
      },
      certifiedYear:{
        type:String,
      }
    }
  ],
  workExperiences: [
    {
      company: {
        type: String,
      },
      from: {
        type: String,
      },
      to: {
        type: String,
      },
      desgination: {
        type: String,
      },
      role:{
        type:String,
      },
      skills: {
        type: [],
      },
      deliverables: {
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
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
  // updatedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },

});

module.exports = mongoose.model('Profile', ProfileSchema);