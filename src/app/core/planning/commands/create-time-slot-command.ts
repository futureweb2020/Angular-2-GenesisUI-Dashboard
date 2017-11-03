import {ICommand} from "../../ng-cqrs/runtime/icommand";
export interface CreateTimeSlotCommand extends ICommand {
  payload: {
    startDate: Date,
    duration: number
  }
}
