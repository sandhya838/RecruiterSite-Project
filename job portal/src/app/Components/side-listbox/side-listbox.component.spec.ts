import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideListboxComponent } from './side-listbox.component';

describe('SideListboxComponent', () => {
  let component: SideListboxComponent;
  let fixture: ComponentFixture<SideListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideListboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
