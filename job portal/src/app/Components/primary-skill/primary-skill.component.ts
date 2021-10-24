import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';
import { SigninService } from 'src/app/signin.service';


@Component({
  selector: 'app-primary-skill',
  templateUrl: './primary-skill.component.html',
  styleUrls: ['./primary-skill.component.scss']
})
export class PrimarySkillComponent implements OnInit {
  sh: any;
  isChecked: boolean = true;
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownListfilmModeling:any=[];
  dropdownListIT:any=[];
  dropdownSettings = {};
  constructor(public formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private notifyService: NotificationService,
    private  signinService: SigninService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
     IT: ["",[Validators.required]],
     filmModeling: ["",[Validators.required]],
     pharmaScience: ["", [Validators.required]],
    });
    this.dropdownListIT=[
      { item_id: 1, item_text: 'Management' },
      { item_id: 2, item_text: 'Finance' },
      { item_id: 3, item_text: 'HR/Legal' },
      { item_id: 4, item_text: 'Consulting' },
      { item_id: 5, item_text: 'Sales/Marketing' },
      { item_id: 6, item_text: 'Programming' },
      { item_id: 7, item_text: 'Graphic Design' },
      { item_id: 8, item_text: 'CAD/GIS/RS' },
      { item_id: 9, item_text: 'Engineering Tech' },
      { item_id: 10, item_text: 'Testing' },
      { item_id: 11, item_text: 'Network Engg' },
      { item_id: 12, item_text: 'Database' },
      { item_id: 13, item_text: 'CloudTech' },
      { item_id: 14, item_text: 'CAD/GIS/ RemoteSensing' },
      { item_id: 15, item_text: 'Enterprize App' },
      { item_id: 16, item_text: 'DevOps' },
      { item_id: 17, item_text: 'Digital Marketing' },
      { item_id: 18, item_text: 'Digital Transformation' },
      { item_id: 19, item_text: 'AI/ML/Analytics' },
    ]
    this.dropdownListfilmModeling = [
      { item_id: 1, item_text: 'Modelling' },
      { item_id: 2, item_text: 'Costume Designer' },
      { item_id: 3, item_text: 'Choriographer' },
      { item_id: 4, item_text: 'Direction' },
      { item_id: 5, item_text: 'Acting' },
      { item_id: 6, item_text: 'Cameramen' }
    ]
    this.dropdownList = [
      { item_id: 1, item_text: 'Research Scientist' },
      { item_id: 2, item_text: 'Legal/Patents' },
      { item_id: 3, item_text: 'HR' },
      { item_id: 4, item_text: 'Marketing' },
      { item_id: 5, item_text: 'Purchase' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
logout(){
  this.signinService.logout()
}
}
