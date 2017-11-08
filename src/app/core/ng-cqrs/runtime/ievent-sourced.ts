import {IVersionedEvent} from "./iversioned-event";
export interface IEventSourced {
  id: string;
  version: number;
  events: Array<IVersionedEvent>;
  commitEvents():void;
}
