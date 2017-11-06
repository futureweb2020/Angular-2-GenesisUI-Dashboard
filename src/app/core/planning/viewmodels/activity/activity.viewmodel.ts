import { ActivityType } from "../../domain/activity-type.enum";
import { ActivitySource } from "../../domain/activity-source.enum";

export interface ActivityViewModel {
  id: string,
  name: string,
  type: ActivityType,
  duration: number,
  source: ActivitySource
}
