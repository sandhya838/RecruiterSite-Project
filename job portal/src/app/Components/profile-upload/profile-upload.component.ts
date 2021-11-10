import { Component, OnInit } from '@angular/core';
import { ProfilesUploaderService } from '../../services/profiles-uploader.service';

@Component({
  selector: 'app-profile-upload',
  templateUrl: './profile-upload.component.html',
  styleUrls: ['./profile-upload.component.scss']
})
export class ProfileUploadComponent implements OnInit {
  [x: string]: any;
  recommendedProfiles$ = this.ProfilesUploaderService.getRecommendedProfiles();

  constructor(private profilesUploaderService: ProfilesUploaderService) { }

  ngOnInit(): void {
  }

}
