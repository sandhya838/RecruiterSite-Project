import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-profile-card',
  templateUrl: './candidate-profile-card.component.html',
  styleUrls: ['./candidate-profile-card.component.scss']
})
export class CandidateProfileCardComponent implements OnInit {
  public stringQrCode: string ;

  constructor() {
    this.stringQrCode = 'eduforbetterment.com';
  }
  ngOnInit(): void {
  }

}
