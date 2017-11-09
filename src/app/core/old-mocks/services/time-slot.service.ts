import { Injectable } from '@angular/core';

let today=new Date();
let timeSlots=[
  {
    id: "1",
    startDate:new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0,0),
    duration:120,
    name: "Entry1",
    activities:[
      {
        name:"ST1",
        duration:40
      },
      {
        name:"ST2",
        duration:30
      },
      {
        name:"ST3",
        duration:20
      }
    ]
  },
  {
    id: "2",
    startDate:new Date(today.getFullYear(),today.getMonth(),today.getDate(),3,0,0,0),
    duration:60,
    name: "Entry2",
    activities:[
      {
        name:"ST1",
        duration:10
      },
      {
        name:"ST3",
        duration:10
      },
      {
        name:"ST4",
        duration:10
      },
      {
        name:"ST5",
        duration:10
      }
    ]
  },
  {
    id: "3",
    startDate:new Date(today.getFullYear(),today.getMonth(),today.getDate(),5,0,0,0),
    duration:120,
    name: "Entry3",
    activities:[
      {
        name:"ST1",
        duration:50
      },
      {
        name:"ST3",
        duration:20
      }
    ]
  }
];

@Injectable()
export class TimeSlotService {

  constructor() { }

  getTimeSlots() {
  	return timeSlots;
  }
}
