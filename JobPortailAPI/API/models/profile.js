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

  experienceDetails:[{
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
}],
rollProfile:[{
  roleManagement: {
    portfolioManagment:{
      type:String
    },
    accountManagment:{
      type:String
    },
    projectManagment:{
      type:String
    }
  },
  roleTechnical: {
    architect:{
      type:String
    },
    techlead:{
      type:String
    },
   developer:{
      type:String
    }
  },
  roleFunctional: {
    sme:{
      type:String
    },
    leadcon:{
      type:String
    },
    consultant:{
      type:String
    }
  }
}],

  skillProfile:[{
  skillSysAdministration: {
    sys:{
      type:String,
    },
    sys1:{
      type:String,
    },
    sys2:{
      type:String,
    },
    sys3:{
      type:String,
    }
  },
  skillTechnical: {
    tech:{
      type:String,
    },
    tech1:{
      type:String,
    },
    tech2:{
      type:String,
    },
    tech3:{
      type:String,
    }
  },
  skillFunctional: {
    functional:{
      type:String,
    },
    functional1:{
      type:String,
    },
    functional2:{
      type:String,
    },
    functional3:{
      type:String,
    }
  }
}],
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
      
    },
    

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
        from: {
          month:{
          joinmonth:String,
        },
        year:{
          joinyear:String,
        }
        },
        to: {
          month:{
            joinmonth:String,
          },
          year:{
            joinyear:String,
          }
        }
      },
      desgination: {
        type: String,
      },
      role:{
        type:String,
      },
      skills: {
        skill1:{
            type:String,
        },
        skill2:{
          type:String,
      },
      skill3:{
        type:String,
    },
    skill4:{
      type:String,
  }
   
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