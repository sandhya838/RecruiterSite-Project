import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  userForm!: FormGroup;
  allData: any;
  alert: boolean = false;
  dropdownList1:any = [];
  dropdownSettings1 = {};
    dropdownList:any = [];
    dropdownListDatabase:any=[];
    dropdownListProgram:any = [];
    selectedItems:any = [];
    dropdownSettings = {}; 
    dropdownSettingsProgram = {};
    dropdownSettingsDatabase={};
    dropdownListdb:any = [];
    dropdownSettingsdb = {};
    dropdownListfin:any = [];
    dropdownSettingsfin = {};
  constructor( public formBuilder: FormBuilder,
    private notifyService: NotificationService,
    private configService: ConfigService,
    private router: Router) { 
   
  }
  pattern = "^[ a-zA-Z/.]*$";
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      management: ["",[Validators.required, Validators.pattern(this.pattern)]],
      dataBase: ["",[Validators.required, Validators.pattern(this.pattern)]],
      pharma: ["",[Validators.required, Validators.pattern(this.pattern)]],
      finances:['',Validators.required]
    });
  this.dropdownList = [
    { item_id: 1, item_text: 'Portfolio' },
    { item_id: 2, item_text: 'Technical' },
    { item_id: 4, item_text: 'Functional' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    // for program
    this.dropdownListProgram = [
      { item_id: 1, item_text: 'Algol' },
      { item_id: 2, item_text: 'C' },
      { item_id: 4, item_text: 'C++' },
      { item_id: 5, item_text: 'C#' },
      { item_id: 6, item_text: 'Cobol' },
      { item_id: 7, item_text: 'Clojure' },
      { item_id: 8, item_text: 'CSS' },
      { item_id: 11, item_text: 'fortran' },
      { item_id: 12, item_text: 'Java' },
      { item_id: 13, item_text: 'Javascript' },
      { item_id: 14, item_text: 'HTML' },
      { item_id: 15, item_text: 'PHP' },
      { item_id: 16, item_text: 'Scala' },
      { item_id: 17, item_text: 'Angular' },
      { item_id: 18, item_text: 'AngularJs' },
      { item_id: 19, item_text: 'Python' },
      { item_id: 20, item_text: '.Net' },
      { item_id: 21, item_text: 'swift' },
      { item_id: 22, item_text: 'SCSS' },
      { item_id: 23, item_text: 'Ruby' },
      { item_id: 24, item_text: 'React' },
      { item_id: 25, item_text: 'Word[ress' },
      { item_id: 26, item_text: 'Haskell' },
      { item_id: 27, item_text: 'Perl' },
      { item_id: 28, item_text: 'TCL'},
      { item_id: 29, item_text: 'Pascal' },
      { item_id: 30, item_text: 'Smalltak' },
      { item_id: 31, item_text: 'Prolog' },
      { item_id: 32, item_text: 'Lisp' },
      { item_id: 33, item_text: 'Lue' },
      ];
      this.dropdownSettingsProgram= {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 4,
        allowSearchFilter: true
      };
      // for database
      this.dropdownListdb =[
        { item_id: 1, item_text: 'Query Analyzers' },
        { item_id: 2, item_text: 'Metadata management and repository usage' },
        { item_id: 3, item_text: 'Database schema creation and management' },
        { item_id: 4, item_text: 'SQL Databases' },
        { item_id: 5, item_text: 'Data analysis' },
        { item_id: 6, item_text: 'Web-specific technology expertise' },
        { item_id: 7, item_text: 'Storage management techniques' },
        { item_id: 8, item_text: 'Extensible data type administration' },
        { item_id: 9, item_text: 'General systems management and networking skills' },
        { item_id: 10, item_text: 'General database management' },
        { item_id: 11, item_text: 'Pl/Sql' },
        { item_id: 12, item_text: 'Data Quality, Mapping, and Profiling' },
        { item_id: 13, item_text: 'Management' },
        { item_id: 14, item_text: ' Business intelligence' },
        { item_id: 15, item_text: 'Communication' },
        { item_id: 16, item_text: ' Data integrity' },
        { item_id: 17, item_text: 'Database planning and design' },
        { item_id: 18, item_text: 'Managing database software' },
        { item_id: 19, item_text: 'Data modeling and database design' },
        { item_id: 20, item_text: ' Backup and recovery' },
        { item_id: 21, item_text: 'Ensuring data integrity' },
        { item_id: 22, item_text: 'object oriented database management systems' },
        { item_id: 23, item_text: 'relational database management systems' },
        { item_id: 24, item_text: 'XML database management systems' },
        { item_id: 25, item_text: 'NoSQL Databases' },
        { item_id: 26, item_text: 'Relational Databases' },
        { item_id: 27, item_text: ' Metadata Management' },
        { item_id: 28, item_text: ' In-memory Databases' },
        { item_id: 29, item_text: '  Realtime Databases' },
        { item_id: 30, item_text: '  Stored Procedures' },
        { item_id: 31, item_text: '  Problem Management' },
        { item_id: 32, item_text: '  Transactions' },
        { item_id: 33, item_text: ' Normalization' },
   ]
   this.dropdownSettingsdb= {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 4,
    allowSearchFilter: true
  };
  // for fianace
  this.dropdownList1= [
    { item_id: 1, item_text: 'Algol' },
    { item_id: 2, item_text: 'C' },
    { item_id: 4, item_text: 'C++' },
    { item_id: 5, item_text: 'C#' },
    { item_id: 6, item_text: 'Cobol' },
    { item_id: 7, item_text: 'Clojure' },
    { item_id: 8, item_text: 'CSS' },
    { item_id: 11, item_text: 'fortran' },
    { item_id: 12, item_text: 'Java' },
    { item_id: 13, item_text: 'Javascript' },
    { item_id: 14, item_text: 'HTML' },
    { item_id: 15, item_text: 'PHP' },
    { item_id: 16, item_text: 'Scala' },
    { item_id: 17, item_text: 'Angular' },
    { item_id: 18, item_text: 'AngularJs' },
    { item_id: 19, item_text: 'Python' },
    { item_id: 20, item_text: '.Net' },
    { item_id: 21, item_text: 'swift' },
    { item_id: 22, item_text: 'SCSS' },
    { item_id: 23, item_text: 'Ruby' },
    { item_id: 24, item_text: 'React' },
    { item_id: 25, item_text: 'Word[ress' },
    { item_id: 26, item_text: 'Haskell' },
    { item_id: 27, item_text: 'Perl' },
    { item_id: 28, item_text: 'TCL'},
    { item_id: 29, item_text: 'Pascal' },
    { item_id: 30, item_text: 'Smalltak' },
    { item_id: 31, item_text: 'Prolog' },
    { item_id: 32, item_text: 'Lisp' },
    { item_id: 33, item_text: 'Lue' },
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




