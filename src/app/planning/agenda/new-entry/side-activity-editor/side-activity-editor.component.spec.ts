import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideActivityEditorComponent } from './side-activity-editor.component';

describe('SideActivityEditorComponent', () => {
  let component: SideActivityEditorComponent;
  let fixture: ComponentFixture<SideActivityEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideActivityEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideActivityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
