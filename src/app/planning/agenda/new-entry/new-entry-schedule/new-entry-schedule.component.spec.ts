import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryScheduleComponent } from './new-entry-schedule.component';

describe('NewEntryScheduleComponent', () => {
  let component: NewEntryScheduleComponent;
  let fixture: ComponentFixture<NewEntryScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntryScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
