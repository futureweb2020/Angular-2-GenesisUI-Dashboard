import {AggregateRoot} from "../../ng-cqrs/runtime/event-sourced";
import {Activity} from "./activity";
import {TimeSlotType} from "./time-slot-type.enum";
import {IVersionedEvent} from "../../ng-cqrs/runtime/iversioned-event";
import {EventHelper} from "../event-helper";
import {TimeSlotEventWire} from "./time-slot-event-wire";
import {TimeslotScheduleEvent} from "../events/timeslot-schedule-event";
import {ActivityAddedEvent} from "../events/activity-added-event";
import {TimeSlotTypeSetEvent} from "../events/time-slot-type-set-event";
export class TimeSlot extends AggregateRoot implements TimeSlotEventWire{
  protected initState() {
    this.state.activities = new Array<Activity>();
  }

  // Event Handlers
  onTimeSlotScheduled = (event: TimeslotScheduleEvent) => {
    this.state.date = event.data.date;
    this.state.duration = event.data.duration;
  };

  onActivityAdded = (event: ActivityAddedEvent) => {
    this.state.activities.push(event.data.activity);
  };

  onTimeSlotTypeSet = (event: TimeSlotTypeSetEvent) => {
    this.state.type = event.data.timeSlotType;
  };

  // Actions
  scheduleActivity(activity: Activity) {
    if (this.getAvailableTime() < activity.duration)
      throw Error("Not enough time to schedule activity");
    this.update(
      {
        sourceId: this.id,
        name: EventHelper.ACTIVITY_ADDED,
        data: {
          activity: activity
        }
      }
    )
  }

  schedule(date: Date, duration: number) {
    this.update({
      sourceId: this.id,
      name: EventHelper.TIMESLOT_SCHEDULED,
      data: {
        date: date,
        duration: duration
      }
    });
  }

  setType(tsType: TimeSlotType) {
    this.update({
        sourceId: this.id,
        name: EventHelper.TIMESLOT_TYPE_SET,
        data: {
          timeSlotType: tsType
        }
      }
    )
  }

  // Other
  private getAvailableTime() {
    return this.state.duration - this.state.activities.reduce((acc, item) => acc + item.duration, 0);
  }
}
