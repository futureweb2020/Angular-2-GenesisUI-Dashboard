import { Component, OnInit, Input } from '@angular/core';

import { StepStatus } from "app/core/old-mocks/models/step-status.enum";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

	@Input()
	activity;
  @Input()
  where;

	StepStatus = StepStatus;

  constructor() { }

  ngOnInit() {
  }

}
