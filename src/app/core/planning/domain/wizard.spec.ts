import {TimeSlot} from "./time-slot";
import {UUID} from "angular2-uuid";
import {IVersionedEvent} from "../../ng-cqrs/runtime/iversioned-event";
import {Activity} from "./activity";
import {ActivityType} from "./activity-type.enum";
import {TimeSlotType} from "./time-slot-type.enum";
import {EventHelper} from "../event-helper";
import {Wizard} from "./wizard";

describe('Wizard', () => {
  let wizardId: string;
  let wizard: Wizard;

  let getCreateEvent = (date = new Date(), duration = 30) => {
    return {
      version: 1,
      timestamp: new Date(),
      name: EventHelper.TIMESLOT_SCHEDULED,
      sourceId: wizardId,
      data: {
        date: date,
        duration: duration
      }
    }
  };

  beforeEach(() => {
    wizardId = UUID.UUID();
    wizard = new Wizard(wizardId);
  });


  it('should apply template', () => {


  });
});
