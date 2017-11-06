import { ActivityViewModel } from '../activity/activity.viewmodel';
import { TimeSlotType } from '../../domain/time-slot-type.enum';
import { TimeSlotSource } from '../../domain/time-slot-source.enum';

export interface TimeSlotViewModel {
  id: string,
  name: string,
  type: TimeSlotType,
  startTime: string,
  duration: number,
  source: TimeSlotSource,
  activities: ActivityViewModel[],
}
