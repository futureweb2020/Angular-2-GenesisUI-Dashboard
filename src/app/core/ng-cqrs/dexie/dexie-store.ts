import {IEventSourcedRepository} from "../runtime/ievent-sourced-repository";
import {ISnapshotRepository} from "../runtime/isnapshot-repository";
import Dexie from 'dexie';
import {IVersionedEvent} from "../runtime/iversioned-event";
import {ISnapshot} from "../runtime/isnapshot";

export class DexieStore extends Dexie implements IEventSourcedRepository,ISnapshotRepository {
  events: Dexie.Table<IVersionedEvent,string>;
  snapshots: Dexie.Table<ISnapshot,string>;

  constructor() {
    super("TelmiDatabase");
    this.version(1).stores({
      events: '++id,sourceId,version',
      snapshots: 'aggregateRootId'
    })
  }

  async getEventsByAggregateId(id: string, lastEventSequence: number): Promise<Array<IVersionedEvent>> {
    let result =
      this.events
        .where("sourceId").equals(id)
        .filter(e => e.version > lastEventSequence)
        .toArray();

    return result;

  }

  saveEventsByAggregateId(id: string, events: Array<IVersionedEvent>) {
    this.events.bulkAdd(events);
  }

  async getSnapshot(aggregateRootId: string): Promise<ISnapshot> {
    let result=await this.snapshots.get({aggregateRootId:aggregateRootId});
    return result;
  }

  saveSnapshot(snapshot: ISnapshot) {
    this.snapshots.put(snapshot);
  }
}
