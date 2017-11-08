import {IEvent} from "./ievent";

export interface IVersionedEvent extends IEvent{
  version : number;
  timestamp: Date;
}
