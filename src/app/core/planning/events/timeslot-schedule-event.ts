import {IEvent} from "../../ng-cqrs/runtime/ievent";
import {IVersionedEvent} from "../../ng-cqrs/runtime/iversioned-event";

export interface TimeslotScheduleEvent extends IVersionedEvent {
  data: {
    date: Date,
    duration: number
  }
}
