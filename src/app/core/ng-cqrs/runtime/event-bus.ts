import {IEventHandler} from "./ievent-handler";
import {IEnvelope} from "./ienvelope";
import {IEvent} from "./ievent";
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class EventBus implements IEventHandler {
  stream:Subject<IEvent>;
  constructor(){
    this.stream=new Subject<IEvent>();
  }
  async handleEvent(eventToHandle: IEnvelope<IEvent>): Promise<void> {
   this.stream.next(eventToHandle.payload);
  }
  get stream$():Observable<IEvent>{return this.stream; }
}
