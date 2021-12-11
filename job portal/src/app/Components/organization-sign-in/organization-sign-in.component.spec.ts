import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSignInComponent } from './organization-sign-in.component';

describe('OrganizationSignInComponent', () => {
  let component: OrganizationSignInComponent;
  let fixture: ComponentFixture<OrganizationSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
