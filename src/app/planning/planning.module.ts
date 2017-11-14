import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DxListModule } from 'devextreme-angular';
import { DxSchedulerModule } from 'devextreme-angular';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { ModalModule } from 'ng2-bootstrap/modal';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { AgendaComponent } from './agenda/agenda.component';
import { PlanningComponent } from './planning.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { ActivityComponent } from './shared/activity/activity.component';
import { TimeSlotComponent } from './agenda/time-slot/time-slot.component';
import { WizardsComponent } from './wizards/wizards.component';
import { WizardComponent } from './wizards/wizard/wizard.component';
import { DragulaModule } from 'ng2-dragula';
import { NewWizardComponent } from './wizards/new-wizard/new-wizard.component';
import { SelFromCtlgComponent } from './wizards/new-wizard/sel-from-ctlg/sel-from-ctlg.component';
import { ConfigureComponent } from './wizards/new-wizard/configure/configure.component';
import { ReviewComponent } from './wizards/new-wizard/review/review.component';
import { AddCustomPieceComponent } from './wizards/new-wizard/add-custom-piece/add-custom-piece.component';
import { AddCtlgPieceComponent } from './wizards/new-wizard/add-ctlg-piece/add-ctlg-piece.component';
import { NgPipesModule } from 'ngx-pipes';
import { NewEntryComponent } from './agenda/new-entry/new-entry.component';
import { AddFromWizardStepsComponent } from './agenda/new-entry/add-from-wizard-steps/add-from-wizard-steps.component';
import { ScheduleEntryComponent } from './wizards/templates/schedule-entry/schedule-entry.component';
import { ConfigureStepComponent } from './agenda/new-entry/add-from-wizard-steps/configure-step/configure-step.component';
import { AddCustomActivityComponent } from './agenda/new-entry/add-custom-activity/add-custom-activity.component';
import { NewEntryScheduleComponent } from './agenda/new-entry/new-entry-schedule/new-entry-schedule.component';
import { SideActivityEditorComponent } from './agenda/new-entry/side-activity-editor/side-activity-editor.component';

@NgModule({
  imports: [
  	FormsModule,
    CommonModule,
    PlanningRoutingModule,
    DxListModule,
    DxSchedulerModule,
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    DragulaModule,
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgPipesModule
  ],
  declarations: [AgendaComponent, PlanningComponent, ActivityComponent, TimeSlotComponent, WizardsComponent, WizardComponent, NewWizardComponent, SelFromCtlgComponent, ConfigureComponent, ReviewComponent, AddCustomPieceComponent, AddCtlgPieceComponent, NewEntryComponent, AddFromWizardStepsComponent, ScheduleEntryComponent, ConfigureStepComponent, AddCustomActivityComponent, NewEntryScheduleComponent, SideActivityEditorComponent]
})
export class PlanningModule { }
