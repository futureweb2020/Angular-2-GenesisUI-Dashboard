import {IEvent} from "../../ng-cqrs/runtime/ievent";
import {TimeSlotType} from "../domain/time-slot-type.enum";

export interface TimeSlotTypeSetEvent extends IEvent {
  data: {
    timeSlotType: TimeSlotType
  }
}
