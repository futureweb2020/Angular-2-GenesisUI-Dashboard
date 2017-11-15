import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureStepComponent } from './configure-step.component';

describe('ConfigureStepComponent', () => {
  let component: ConfigureStepComponent;
  let fixture: ComponentFixture<ConfigureStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
