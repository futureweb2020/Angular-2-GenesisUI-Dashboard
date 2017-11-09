import {IVersionedEvent} from "../../ng-cqrs/runtime/iversioned-event";
import {TimeslotScheduleEvent} from "../events/timeslot-schedule-event";
import {ActivityAddedEvent} from "../events/activity-added-event";
import {TimeSlotTypeSetEvent} from "../events/time-slot-type-set-event";

export interface TimeSlotEventWire {
  onTimeSlotScheduled(event: TimeslotScheduleEvent);
  onActivityAdded(event: ActivityAddedEvent);
  onTimeSlotTypeSet(event: TimeSlotTypeSetEvent);
}
