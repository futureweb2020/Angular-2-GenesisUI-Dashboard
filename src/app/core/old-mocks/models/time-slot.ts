import { Activity } from "./activity";
import { TimeSlotType } from "../../planning/domain/time-slot-type.enum";

export class TimeSlot {
  public id: string;
  public name: string;
  public location?: string;
  public startDate: Date;
  public duration: number;
  public timeslotType: TimeSlotType;
  public activities: Activity[];

  static fromDoc(doc: any): TimeSlot {
    return Object.assign(new TimeSlot(), doc);

  }
}
