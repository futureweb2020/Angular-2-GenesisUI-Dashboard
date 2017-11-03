import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgCqrsModule} from "../ng-cqrs/ng-cqrs.module";
import {HandlerRegistry} from "../ng-cqrs/runtime/handler-registry";
import {CreateTimeSlotHandler} from "./commands/create-time-slot-handler";
import {ScheduleActivityHandler} from "./commands/schedule-activity-handler";
import {TimeSlotGenerator} from "./viewmodels/generators/timne-slot-generator";
import {PlanningCommandHelper} from "./command-helper";
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";
import {ScheduleStoreService} from "./services/schedule-store.service";


@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    NgCqrsModule
  ],
  declarations: [],
  providers: [
    CreateTimeSlotHandler,
    ScheduleActivityHandler,
    TimeSlotGenerator,
    PlanningCommandHelper,
    ScheduleStoreService
  ]
})
export class PlanningModule {
  constructor(timeSlotGenerator: TimeSlotGenerator) {

    console.log("planning module initializer");
  }
}
