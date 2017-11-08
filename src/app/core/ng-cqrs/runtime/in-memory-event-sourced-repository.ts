import {IEventSourcedRepository} from "./ievent-sourced-repository";
import {IVersionedEvent} from "./iversioned-event";
export class InMemoryEventSourcedRepository implements IEventSourcedRepository{
  private db : any;

  constructor(){
    this.db = {};
  }

  async getEventsByAggregateId(id : string,lastEventSequence:number=0):Promise<Array<IVersionedEvent>>{
    if(!this.db[id]) return [];

    var aggregateEvents = this.db[id];
    return aggregateEvents.filter(t=>t.version>lastEventSequence).order(t=>t.version);
  }

  async saveEventsByAggregateId(id : string, events : Array<IVersionedEvent>){
    var aggregateEvents = this.db[id];
    if(!aggregateEvents) aggregateEvents = [];
    aggregateEvents = aggregateEvents.concat(events);
    this.db[id] = aggregateEvents;
  }
}
