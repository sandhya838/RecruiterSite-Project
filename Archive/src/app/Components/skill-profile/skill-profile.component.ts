import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config.service";
import { NotificationService } from "src/app/notification.service";

@Component({
  selector: "app-skill-profile",
  templateUrl: "./skill-profile.component.html",
  styleUrls: ["./skill-profile.component.scss"],
})
export class SkillProfileComponent implements OnInit {
  userForm!: FormGroup;
  alert: boolean = false;
  allData: any;
  multiselect: any;
  data:any;

  dropdownList:any = [];
    selectedItems:any = [];
    dropdownSettings = {};
    dropdownList1:any = [];
  dropdownSettings1 = {};
  constructor(
    public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      tech3: ["", [Validators.required]],
      tech: ["", [Validators.required]],
      tech1: ["", [Validators.required]],
      tech2: ["", [Validators.required]],
      functional: ["", [Validators.required]],
      functional1: ["", [Validators.required]],
      functional2: ["", [Validators.required]],
      functional3: ["", [Validators.required]],
      sys: ["", [Validators.required]],
      sys1: ["", [Validators.required]],
      sys2: ["", [Validators.required]],
      sys3: ["", [Validators.required]],
    });
    this.dropdownList = [
      { item_id: 1, item_text: 'Data analysis' },
      { item_id: 2, item_text: 'Project management' },
      { item_id: 3, item_text: 'Software proficiency' },
      { item_id: 4, item_text: 'Common operating systems' },
      { item_id: 5, item_text: 'Programming languages' },
      { item_id: 6, item_text: 'Digital design' },
      { item_id: 7, item_text: 'Marketing Strategy' },
      { item_id: 8, item_text: 'Copywriting' },
      { item_id: 9, item_text: 'Computer Programs & Software' },
      { item_id: 10, item_text: 'Accounting' },
      { item_id: 11, item_text: 'Data Analysis' },
      { item_id: 12, item_text: 'Medicine & Healthcare' },
      { item_id: 13, item_text: 'Management' },
      { item_id: 14, item_text: ' Productivity Software to Learn' },
      { item_id: 15, item_text: 'Medicine & Healthcare' },
      { item_id: 16, item_text: 'Medicine & Healthcare' },
      { item_id: 17, item_text: 'Medicine & Healthcare' },
      { item_id: 18, item_text: 'Medicine & Healthcare' },
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
    this.dropdownList1 = [
      { item_id: 1, item_text: 'Communication' },
      { item_id: 2, item_text: 'Organization Management' },
      { item_id: 3, item_text: 'Research & exploration' },
      { item_id: 4, item_text: 'Informaion management' },
      { item_id: 5, item_text: 'Design & planning' },
      { item_id: 6, item_text: 'Human services' },
      { item_id: 7, item_text: 'Marketing Strategy' },
      { item_id: 8, item_text: 'Copywriting' },
      { item_id: 9, item_text: 'Computer Programs & Software' },
      { item_id: 10, item_text: 'Accounting' },
      
    ];
    this.dropdownSettings1= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  get getControl() {
    return this.userForm.controls;
  }

  onClick(formValue: any, isValid: boolean) {
    console.log(this.userForm.value);

    if (isValid) {
      const skillSysAdministration = {
        sys: formValue.sys,
        sys1: formValue.sys1,
        sys2: formValue.sys2,
        sys3: formValue.sys3,
      };
      const skillTechnical = {
        tech3: formValue.tech3,
        tech1: formValue.tech1,
        tech2: formValue.tech2,
        tech: formValue.tech,
      };
     
      const skillFunctional = {
        functional: formValue.functional,
        functional1: formValue.functional1,
        functiona2: formValue.functiona2,
        functional3: formValue.functional3,
      };
      const finalData = {
        skillSysAdministration: skillSysAdministration,
        skillTechnical: skillTechnical,
        skillFunctional: skillFunctional,
      };
      console.log("finalData", finalData);
      this.configService
        .updateUser(localStorage.getItem("ID"), finalData)
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.notifyService.showSuccess(data.message);
              this.router.navigateByUrl("/work-experience");
              this.userForm.reset();
            } else {
              this.notifyService.showError(data.message);
            }
          },
          (error) => {
            this.notifyService.showError(error.message);
          }
        );
    } else {
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  closeAlert() {
    this.alert = false;
  }
}
