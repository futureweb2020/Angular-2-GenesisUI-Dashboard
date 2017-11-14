import { Component, OnInit, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';

import { DxSchedulerComponent } from 'devextreme-angular';
import { TimeSlotService } from "app/core/old-mocks/services/time-slot.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  providers: [TimeSlotService]
})
export class AgendaComponent implements OnInit, AfterViewInit {

  currentView: string = 'day';
  prevDateBtn: any;
  nextDateBtn: any;
  chooseDateBtn: any;

  currentDate: any = new Date();
  timeSlots = [];

  newEntryEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private agenda: ElementRef, private timeSlotService: TimeSlotService) { }

  public navigateDateToPrev() {
    this.prevDateBtn.click();
  }

  public navigateDateToNext() {
    this.nextDateBtn.click();
  }

  public chooseDate() {
    this.currentDate = new Date();
  }

  ngAfterViewInit() {
    this.prevDateBtn = this.agenda.nativeElement.querySelector('.dx-scheduler-navigator-previous');
    this.nextDateBtn = this.agenda.nativeElement.querySelector('.dx-scheduler-navigator-next');
    this.chooseDateBtn = this.agenda.nativeElement.querySelector('.dx-scheduler-navigator-caption');
  }

  getTimeSlots(): void {
    this.timeSlots = this.timeSlotService.getTimeSlots();

    this.timeSlots.map((timeSlot) => {
      timeSlot.endDate = new Date(timeSlot.startDate.getTime() + timeSlot.duration * 60000);
      return timeSlot;
    });
  }

  ngOnInit() {
    this.getTimeSlots();
  }

}
