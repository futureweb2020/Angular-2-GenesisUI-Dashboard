import { Component, OnInit } from '@angular/core';

import { ActivityType } from "app/core/planning/domain/activity-type.enum";

@Component({
  selector: 'app-add-custom-activity',
  templateUrl: './add-custom-activity.component.html',
  styleUrls: ['./add-custom-activity.component.scss']
})
export class AddCustomActivityComponent implements OnInit {

	ActivityType = ActivityType;

	activityType:ActivityType = ActivityType.Exercise;

  constructor() { }

  ngOnInit() {
  }

}
