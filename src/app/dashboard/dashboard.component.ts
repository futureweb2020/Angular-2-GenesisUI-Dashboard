import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleStoreService } from "../core/planning/services/schedule-store.service";
import { Observable } from "rxjs";
import { UUID } from "angular2-uuid";
import { TimeSlotViewModel } from "app/core/planning/viewmodels/time-slot/time-slot.viewmodel";
import { TimeSlotType } from "../core/planning/domain/time-slot-type.enum";
import { TimeSlotSource } from "../core/planning/domain/time-slot-source.enum";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private timeslots$: Observable<TimeSlotViewModel[]>;

  constructor(public scheduleService: ScheduleStoreService) { }

  ngOnInit(): void {
    this.timeslots$ = this.scheduleService.getTimeSlots();
    this.timeslots$.subscribe(z => {
      console.log(z);
      //z.map(ts=>{ts.logme();})
    })
  }
  seedNew(): void {
    console.log(new Date().toISOString());
    let newEntry: TimeSlotViewModel = {
      id: UUID.UUID(),
      name: "My TimeSlot - ",
      type: TimeSlotType.Audition,
      startTime: new Date().toISOString(),
      duration: 30,
      source: TimeSlotSource.Wizard,
      activities: [],
    }

    newEntry.name += newEntry.id;

    this.scheduleService.add(newEntry);
  }
}
