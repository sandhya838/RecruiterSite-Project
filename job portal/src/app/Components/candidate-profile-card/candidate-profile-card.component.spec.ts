import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileCardComponent } from './candidate-profile-card.component';

describe('CandidateProfileCardComponent', () => {
  let component: CandidateProfileCardComponent;
  let fixture: ComponentFixture<CandidateProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
