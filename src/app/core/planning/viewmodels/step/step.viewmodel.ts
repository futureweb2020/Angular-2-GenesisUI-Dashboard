import { ActivityViewModel } from '../activity/activity.viewmodel';
import { StepType } from "./step-type.enum";
import { StepStatus } from "./step-status.enum";

export interface StepViewModel {
  id: string,
  wizId: string,
  wizStep: number,
  name: string,
  duration: number,
  type: StepType,
  status: StepStatus,
  activities: ActivityViewModel[],
}
