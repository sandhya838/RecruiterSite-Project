import { TestBed } from '@angular/core/testing';

import { OrganizationSignInService } from './organization-sign-in.service';

describe('OrganizationSignInService', () => {
  let service: OrganizationSignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationSignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
