import {CreateTimeSlotCommand} from "./commands/create-time-slot-command";
import {UUID} from "angular2-uuid";
import {Activity} from "./domain/activity";
import {ScheduleActivityCommand} from "./commands/schedule-activity-command";
import {timestamp} from "rxjs/operator/timestamp";
import {CommandHelper} from "../ng-cqrs/helpers/command-helper";
import {Injectable} from "@angular/core";
import {TimeSlotGenerator} from "./viewmodels/generators/timne-slot-generator";
import {ScheduleActivityHandler} from "./commands/schedule-activity-handler";
import {CreateTimeSlotHandler} from "./commands/create-time-slot-handler";
import {HandlerRegistry} from "../ng-cqrs/runtime/handler-registry";
import {ICqrsState} from "../ng-cqrs/ngrx/icqrs-state";
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";

@Injectable()
export class PlanningCommandHelper extends CommandHelper {

  public static CREATE_TIMESLOT = "create_timeslot";
  public static SCHEDULE_ACTIVITY = "schedule_activity";

  constructor(ngRedux: NgRedux<ICqrsState>,
              registrar: HandlerRegistry,
              createTimeSlotHandler: CreateTimeSlotHandler,
              scheduleActivityHandler: ScheduleActivityHandler){
    super(ngRedux);
    registrar.registerCommandHandler("create_timeslot", createTimeSlotHandler);
    registrar.registerCommandHandler("schedule_activity", scheduleActivityHandler);

  }


  public generateCreateTimeSlotCommand(startDate: Date, duration: number): CreateTimeSlotCommand {
    let command: CreateTimeSlotCommand = {
      id: UUID.UUID(),
      name: PlanningCommandHelper.CREATE_TIMESLOT,
      payload: {
        startDate,
        duration
      }
    };
    this.pushCommand(command);
    return command;
  }


  public generateScheduleActivityCommand(timeSlotId:string, activity: Activity): ScheduleActivityCommand {
    let command: ScheduleActivityCommand = {
      id: UUID.UUID(),
      name: PlanningCommandHelper.SCHEDULE_ACTIVITY,
      payload: {
        activity,
        timeSlotId
      }
    };
    this.pushCommand(command);
    return command;
  }
}
