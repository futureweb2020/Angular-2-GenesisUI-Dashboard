import {ICommand} from "../../ng-cqrs/runtime/icommand";
import {Activity} from "../domain/activity";
export interface ScheduleActivityCommand extends ICommand {
  payload: {
    activity: Activity,
    timeSlotId: string
  }
}
