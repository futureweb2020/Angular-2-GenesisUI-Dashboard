import {ICommandHandler} from "../../ng-cqrs/runtime/icommand-handler";
import {IEnvelope} from "../../ng-cqrs/runtime/ienvelope";
import {ICommand} from "../../ng-cqrs/runtime/icommand";
import {Injectable} from "@angular/core";
import {DomainRepository} from "../../ng-cqrs/runtime/domain-repository";
import {TimeSlot} from "../domain/time-slot";
import {UUID} from "angular2-uuid";
import {CreateTimeSlotCommand} from "./create-time-slot-command";
@Injectable()
export class CreateTimeSlotHandler implements ICommandHandler {

  constructor(private domainRepository:DomainRepository){}
  async handleCommand(commandToHandle: CreateTimeSlotCommand): Promise<boolean> {
    let timeSlot = new TimeSlot(UUID.UUID());

    timeSlot.schedule(commandToHandle.payload.startDate, commandToHandle.payload.duration);
    this.domainRepository.save(timeSlot);
    return true;
  }
}
