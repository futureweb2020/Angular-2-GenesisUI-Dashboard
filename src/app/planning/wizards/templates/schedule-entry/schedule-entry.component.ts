import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'app-schedule-entry',
  templateUrl: './schedule-entry.component.html',
  styleUrls: ['./schedule-entry.component.scss']
})
export class ScheduleEntryComponent implements OnInit {

	duration: number = 60;
	whenDate = new Date();
	whenTime = new Date();
  settingDate = false;
  settingTime = false;

	@ViewChild('scheduleModal') public confirmEntryModal:ModalDirective;

  constructor() { }

  ngOnInit() {
  }

  confirmEntry() {
  	this.confirmEntryModal.hide();
  }

}
