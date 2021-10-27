import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSignUpComponent } from './organization-sign-up.component';

describe('OrganizationSignUpComponent', () => {
  let component: OrganizationSignUpComponent;
  let fixture: ComponentFixture<OrganizationSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
