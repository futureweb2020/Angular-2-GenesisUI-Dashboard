import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFromWizardStepsComponent } from './add-from-wizard-steps.component';

describe('AddFromWizardStepsComponent', () => {
  let component: AddFromWizardStepsComponent;
  let fixture: ComponentFixture<AddFromWizardStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFromWizardStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFromWizardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
