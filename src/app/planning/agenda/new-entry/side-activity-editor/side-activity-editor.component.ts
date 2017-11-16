import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Activity } from 'app/core/planning/domain/activity';

@Component({
  selector: 'app-side-activity-editor',
  templateUrl: './side-activity-editor.component.html',
  styleUrls: ['./side-activity-editor.component.scss']
})
export class SideActivityEditorComponent implements OnInit {

	@Input()
	eeNewActivity: EventEmitter<Activity> = new EventEmitter<Activity>();
	@Output()
	hideActivityEditor: EventEmitter<any> = new EventEmitter<any>();

	activity: Activity;
	duration: number;

  constructor() { }

  ngOnInit() {
  	this.eeNewActivity.subscribe((activity) => {
  		this.activity = activity;
  		this.duration = activity.duration;
  	});
  }

  updateActivity() {
  	this.activity.duration = this.duration;
  	this.hideActivityEditor.next(null);
  }

}
