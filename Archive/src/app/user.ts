export class User {
    id!:String;
    
    first_Name!:number;
    middle_Name!:number;  
    lastName!:number ;
    Country!:  number ;
    State!:number;
      City!:number;
      Nation!:number;
      currentNationality!:number;
      previousNationality!:number;

      experienceDetails!:[{
        totalYearsOfExperience: String;
          timeSize: number;
          volumeOfBusinessManged: String;
          noticePeriod: String;
          salary: String;
          baseSalary: String;
          variableSalary: String;
          otherComponent: String;
          indServed: String;
      }]

      roleManagement!: number;
      roleTechnical!: number;
      roleFunctional!: number;

      skillProfile!:[{
        skillSysAdministration: {
            sys:number;
              sys1:number;
              sys2:number;
              sys3:number;
        },
        skillTechnical: {
            tech:number;
              tech1:number;
              tech2:number;
              tech3:number;
        },
        skillFunctional: {
            functional:number;
            functional1:number;
            functional2:number;
            functional3:number;
            }
          
        }]


          educationalDetails!: [{
              degree:  number;
              Country:number;
              institute:number;
              grade:number;
              yearofPassing: 
                {
                  month: number;
                
                  year: number;
                  
                }
              
            }]

}
