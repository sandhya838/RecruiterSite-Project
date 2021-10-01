import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollprofileComponent } from './rollprofile.component';

describe('RollprofileComponent', () => {
  let component: RollprofileComponent;
  let fixture: ComponentFixture<RollprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
