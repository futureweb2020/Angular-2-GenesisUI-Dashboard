import { ActivityType } from "../../planning/domain/activity-type.enum";

export class Activity {
  public id:string;
  public duration: number;
  public name: string; //we're putting this here for testing purposes
  public activityType:ActivityType
}
