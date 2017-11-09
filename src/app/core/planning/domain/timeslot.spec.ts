import {TimeSlot} from "./time-slot";
import {UUID} from "angular2-uuid";
import {IVersionedEvent} from "../../ng-cqrs/runtime/iversioned-event";
import {Activity} from "./activity";
import {ActivityType} from "./activity-type.enum";
import {TimeSlotType} from "./time-slot-type.enum";
import {EventHelper} from "../event-helper";

describe('TimeSlot', () => {
  let tsId: string;
  let timeSlot: TimeSlot;

  let getCreateEvent = (date = new Date(), duration = 30) => {
    return {
      version: 1,
      timestamp: new Date(),
      name: EventHelper.TIMESLOT_SCHEDULED,
      sourceId: tsId,
      data: {
        date: date,
        duration: duration
      }
    }
  };

  let getSetTypeEvent = (tsType = TimeSlotType.Lesson) => {
    return {
      version: 1,
      name: EventHelper.TIMESLOT_TYPE_SET,
      timestamp: new Date(),
      sourceId: tsId,
      data: {
        timeSlotType: tsType
      }
    }
  };

  let getAddActivityEvent = (activity: Activity) => {
    return {
      version: 1,
      name: EventHelper.ACTIVITY_ADDED,
      timestamp: new Date(),
      sourceId: tsId,
      data: {
        activity: activity
      }
    }
  };

  beforeEach(() => {
    tsId = UUID.UUID();
    timeSlot = new TimeSlot(tsId);
  });


  it('should schedule', () => {

    let date = new Date();
    let duration = 30;

    let timeSlot = new TimeSlot(tsId);

    timeSlot.schedule(date, duration);
    expect(timeSlot).toBeTruthy();
    expect(timeSlot.events.length).toBeGreaterThan(0);


    expect(timeSlot.events.pop()).toEqual(getCreateEvent());
  });

  it('should set type', () => {
    let timeSlot = new TimeSlot(tsId);

    timeSlot.setType(TimeSlotType.Lesson);
    expect(timeSlot.events.length).toBeGreaterThan(0);

    expect(timeSlot.events.pop()).toEqual(getSetTypeEvent());
  });

  it('should schedule activity', () => {
    timeSlot.loadFromEvents([getCreateEvent()]);
    let activity: Activity = {
      id: UUID.UUID(),
      name: "An activity",
      activityType: ActivityType.Exercise,
      duration: 30,
    };
    timeSlot.scheduleActivity(activity);
    expect(timeSlot.events.length).toBeGreaterThan(0);

    let lastEvent = timeSlot.events.pop();
    expect(lastEvent.name).toBe(EventHelper.ACTIVITY_ADDED);
    expect(lastEvent.data.activity.id).toBe(activity.id);
  });

  it('should not schedule activity if activity duration > timeslot time', () => {
    timeSlot.loadFromEvents([getCreateEvent()]);
    let activity: Activity = {
      id: UUID.UUID(),
      name: "An activity",
      activityType: ActivityType.Exercise,
      duration: 50,
    };
    expect(() => timeSlot.scheduleActivity(activity)).toThrow();
  });

  it('should not schedule activity if activity duration > timeslot time - sum of existing activities duration', () => {
    let activity: Activity = {
      id: UUID.UUID(),
      name: "An activity",
      activityType: ActivityType.Exercise,
      duration: 10,
    };
    timeSlot.loadFromEvents([getCreateEvent(), getAddActivityEvent(activity), getAddActivityEvent(activity), getAddActivityEvent(activity)]);
    expect(() => timeSlot.scheduleActivity(activity)).toThrow();
  });
});
