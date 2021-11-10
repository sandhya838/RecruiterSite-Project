import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfileCardComponent } from './job-profile-card.component';

describe('JobProfileCardComponent', () => {
  let component: JobProfileCardComponent;
  let fixture: ComponentFixture<JobProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
