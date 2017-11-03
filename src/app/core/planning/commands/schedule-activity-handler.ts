import {DomainRepository} from "../../ng-cqrs/runtime/domain-repository";
import {ScheduleActivityCommand} from "./schedule-activity-command";
import {TimeSlot} from "../domain/time-slot";
import {Injectable} from "@angular/core";

@Injectable()
export class ScheduleActivityHandler {
  constructor(private domainRepository: DomainRepository) {
  }

  async handleCommand(commandToHandle: ScheduleActivityCommand): Promise<boolean> {
    let timeSlot: TimeSlot = await this.domainRepository.getById(commandToHandle.payload.timeSlotId, TimeSlot);
    timeSlot.scheduleActivity(commandToHandle.payload.activity);
    this.domainRepository.save(timeSlot);
    return true;
  }
}
