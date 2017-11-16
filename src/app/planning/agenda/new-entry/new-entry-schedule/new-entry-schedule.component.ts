import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Activity } from 'app/core/planning/domain/activity';
import { ActivityType } from 'app/core/planning/domain/activity-type.enum';

enum SubType {
	OpenStrings = 'Open strings' as any,
  Custom = 'Custom exercise' as any,
  Free = 'Free' as any,
  Self = 'Self-assessment' as any
}

interface ScheduleActivity extends Activity {
	isEmpty: boolean;
	isScheduling: boolean;
	scheduleType: ActivityType;
	subType: SubType;
}

@Component({
  selector: 'app-new-entry-schedule',
  templateUrl: './new-entry-schedule.component.html',
  styleUrls: ['./new-entry-schedule.component.scss']
})
export class NewEntryScheduleComponent implements OnInit {

	ActivityType = ActivityType;
	SubType = SubType;

	@Input()
	duration: number;
	@Input()
	startActivitySchedule: EventEmitter<ActivityType>;
	@Output()
	toggleActivityEditor: EventEmitter<Activity> = new EventEmitter<Activity>();

	activities: ScheduleActivity[] = [];
	subType: SubType;

  constructor() { }

  ngOnInit() {
  	var emptyActivity = <ScheduleActivity> { isEmpty: true, isScheduling: false, duration: this.duration };
  	this.activities = [emptyActivity];

  	this.startActivitySchedule.subscribe((type) => this.startScheduleActivity(type));
  }

  startScheduleActivity(type: ActivityType) {
  	var activity: ScheduleActivity;
  	for (var idx = 0; idx < this.activities.length; idx++) {
  		activity = this.activities[idx];
  		if (activity.isEmpty && !activity.isScheduling)
  			break;
  	}

  	if (activity) {
	  	activity.scheduleType = type;
	  	activity.isScheduling = true;
	  }
  }

  scheduleActivity(activity: ScheduleActivity) {
  	activity.activityType = activity.scheduleType;
  	activity.isEmpty = false;
  	activity.isScheduling = false;
  	activity.subType = this.subType;

  	this.subType = null;
  }

  deleteActivity(activity: ScheduleActivity) {
  	activity.isEmpty = true;
  }

}
