import { TestBed } from '@angular/core/testing';

import { ProfilesUploaderService } from './profiles-uploader.service';

describe('ProfilesUploaderService', () => {
  let service: ProfilesUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
