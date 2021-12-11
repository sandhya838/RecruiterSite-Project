import { TestBed } from '@angular/core/testing';

import { ForgotResetService } from './forgot-reset.service';

describe('ForgotResetService', () => {
  let service: ForgotResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
