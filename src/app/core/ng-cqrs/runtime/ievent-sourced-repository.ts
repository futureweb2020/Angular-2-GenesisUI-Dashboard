import {IVersionedEvent} from "./iversioned-event";
export interface IEventSourcedRepository {
  getEventsByAggregateId(id : string,lastEventSequence:number):Promise<Array<IVersionedEvent>>;
  saveEventsByAggregateId(id : string, events : Array<IVersionedEvent>);
}
