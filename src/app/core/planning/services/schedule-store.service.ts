import { Injectable } from '@angular/core';
import {RxDatabase, RxDocument} from "rxdb";
import {DatabaseService} from "../../ng-cqrs/rxdb/database.service";
import { Observable } from "rxjs";
import { TimeSlotViewModel } from "../viewmodels/time-slot/time-slot.viewmodel";

@Injectable()
export class ScheduleStoreService {
  private tableName='timeslot';
  constructor(private database:DatabaseService) {
  }

  getTimeSlots():Observable<TimeSlotViewModel[]>{
    return Observable.fromPromise(this.database.get())
      .switchMap((db)=>db[this.tableName].find().$)
      .skip(1);
  }

  async add(entry: TimeSlotViewModel):Promise<TimeSlotViewModel> {
    let db=await this.database.get();
    return db[this.tableName].insert(entry);
  }

  async getById(tsvId:string):Promise<TimeSlotViewModel>{
    let db=await this.database.get();
    let result=await db[this.tableName].findOne().where("id").eq(tsvId);
    return result;
  }

  async update(timeSlot) {
    return timeSlot.save();
  }
}
