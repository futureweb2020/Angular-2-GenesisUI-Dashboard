import { Component, OnInit, ViewChild, Input, EventEmitter, ElementRef } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';
import { TabsetComponent } from 'ng2-bootstrap';

import { Activity } from 'app/core/planning/domain/activity';
import { ActivityViewModel } from 'app/core/planning/viewmodels/activity/activity.viewmodel';
import { ActivityType } from 'app/core/planning/domain/activity-type.enum';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  ActivityType = ActivityType;

	@Input()
	newEntryEvent: EventEmitter<any>;

	@ViewChild('newEntryModal') public newEntryModal:ModalDirective;
	@ViewChild('staticTabs') staticTabs: TabsetComponent;
  @ViewChild('activityEditor') activityEditor: ElementRef;

  startActivitySchedule: EventEmitter<ActivityType> = new EventEmitter<ActivityType>();

  step:number = 0;

	entryType = 'practice';
	duration:number = 60;
	whenDate = new Date();
	whenTime = new Date();
  settingDate = false;
  settingTime = false;

  allocatedActivities:ActivityViewModel[];
  allocatedDuration:number = 0;

  eeNewActivity: EventEmitter<Activity> = new EventEmitter<Activity>();

  constructor() { }

  ngOnInit() {
  	this.newEntryEvent.subscribe(item => this.showAndInitModal());
  }

  saveEntry() {
  	this.newEntryModal.hide();
  }

  showAndInitModal() {
    this.step = 0;
    this.allocatedActivities = [];
    this.allocatedDuration = 0;

    this.newEntryModal.show();
  }

  toggleActivityEditor($event) {
    this.activityEditor.nativeElement.classList.toggle('shown');

    if ($event) {
      this.eeNewActivity.next($event);
    }
  }

}
