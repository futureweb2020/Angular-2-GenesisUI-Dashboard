import {Injectable} from "@angular/core";
import {EventBus} from "../../../ng-cqrs/runtime/event-bus";
import {DomainEventListener} from "../../../ng-cqrs/runtime/event-listener";
import {TimeSlotEventWire} from "../../domain/time-slot-event-wire";
import {ScheduleStoreService} from "../../services/schedule-store.service";
import {TimeslotScheduleEvent} from "../../events/timeslot-schedule-event";
import {ActivityAddedEvent} from "../../events/activity-added-event";
import {TimeSlotTypeSetEvent} from "../../events/time-slot-type-set-event";
import {TimeSlotViewModel} from "../time-slot/time-slot.viewmodel";
import {TimeSlotSource} from "../../domain/time-slot-source.enum";
import {TimeSlotType} from "../../domain/time-slot-type.enum";
import {ActivityType} from "../../domain/activity-type.enum";
import {ActivitySource} from "../../domain/activity-source.enum";

@Injectable()
export class TimeSlotGenerator extends DomainEventListener implements TimeSlotEventWire {
  async onTimeSlotScheduled(event: TimeslotScheduleEvent) {
    let timeSlot = await this.getOrNew(event.sourceId);

    timeSlot.startTime=event.data.date.toISOString();
    timeSlot.duration=event.data.duration;

    await this.scheduleStore.update(timeSlot);
  }

  private async getOrNew(tsvId:string):Promise<TimeSlotViewModel> {
    let timeSlot = await this.scheduleStore.getById(tsvId);
    if (timeSlot === null) {
      let newts: TimeSlotViewModel = {
        name: "",
        activities: [],
        id: tsvId,
        startTime: "",
        source: TimeSlotSource.Manual,
        type: TimeSlotType.PraticeSession,
        duration: 0
      };
      timeSlot = await this.scheduleStore.add(newts);
    }
    return timeSlot;
  }

  async onActivityAdded(event: ActivityAddedEvent) {
    let timeSlot = await this.getOrNew(event.sourceId);

    let activity = event.data.activity;
    timeSlot.activities.push({
      type:ActivityType.Exercise, //TODO: Normalize VMs enums with domain enums
      source: ActivitySource.Wizard,
      id:activity.id,
      name:activity.name,
      duration:activity.duration
    });
    await this.scheduleStore.update(timeSlot);
  }

  onTimeSlotTypeSet(event: TimeSlotTypeSetEvent) {

  }

  constructor(private scheduleStore: ScheduleStoreService, eventBus: EventBus) {
    super(eventBus);
  }

}
