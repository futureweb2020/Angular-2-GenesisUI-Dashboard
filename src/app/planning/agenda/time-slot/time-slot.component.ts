import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit, AfterViewInit {

	@Input()
	timeSlot: any;

	droppedActivities = [];
	dropPane: any;

	calcWidth(duration: number): number {
		return 100.0 / this.timeSlot.duration * duration;
	}

  constructor(private dragulaService: DragulaService, private el: ElementRef) {
  	dragulaService.dropModel.subscribe((value) => {
  		if (this.dropPane === value[2]) {
  			let activity = this.droppedActivities[0];

  			if (this.timeSlot.remaining >= activity.duration) {
  				activity.width = this.calcWidth(activity.duration);
  				this.timeSlot.remaining -= activity.duration;
  				this.timeSlot.remainingWidth = this.calcWidth(this.timeSlot.remaining);
  				this.timeSlot.activities.push(this.droppedActivities[0]);
  			}
  			
  			this.droppedActivities.pop();
  		}
  	});
  }

  ngOnInit() {
    this.timeSlot.remaining = this.timeSlot.duration;
    for (var activity of this.timeSlot.activities) {
    	activity.width = this.calcWidth(activity.duration);
    	this.timeSlot.remaining -= activity.duration;
    }
    this.timeSlot.remainingWidth = this.calcWidth(this.timeSlot.remaining);
  }

  ngAfterViewInit() {
  	this.dropPane = this.el.nativeElement.querySelector('.drop-pane');
  }
}
