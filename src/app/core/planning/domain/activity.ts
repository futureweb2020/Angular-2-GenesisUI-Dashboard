import {ActivityType} from "./activity-type.enum";
export interface Activity {
  id: string;
  duration: number;
  name: string; //we're putting this here for testing purposes
  activityType: ActivityType;
  //catalogId: string
}
