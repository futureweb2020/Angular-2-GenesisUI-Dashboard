import {IEventSourced} from "./ievent-sourced";
import {IVersionedEvent} from "./iversioned-event";
import {ISnapshotOriginator} from "./isnapshot-originator";
import {ISnapshot} from "./isnapshot";
import {IEvent} from "./ievent";
export abstract class AggregateRoot implements IEventSourced,ISnapshotOriginator {
  public id: string;
  public version: number;
  public events: Array<IVersionedEvent>;
  public originalVersion: number;
  protected snapshot: ISnapshot;

  constructor(id: string) {
    this.id = id;
    this.events = new Array<IVersionedEvent>();
    this.version = 0;
    this.originalVersion=0;
    this.snapshot = {
      aggregateRootId: this.id,
      lastEventSequence: 0
    };
    this.initState();
  }


  loadFromEvents(events: Array<IVersionedEvent>): void {
    var self = this;
    events.forEach(function (item) {
      self["on" + item.name](item);
      self.version = item.version;
    });
  }

  update(event: IEvent): void {
    var versionedEvent = {
      ...event,
      timestamp:new Date(),
      sourceId: this.id,
      version: this.version + 1

    }

    this["on" + versionedEvent.name](versionedEvent);
    this.version = versionedEvent.version;
    this.events.push(versionedEvent);
  }

  get state() {
    return this.snapshot as any;
  }

  commitEvents() {
    this.events = new Array<IVersionedEvent>();
  }

  getSnapshot(): ISnapshot {
    return this.snapshot;
  }

  loadFromSnapshot(snapshot: ISnapshot): void {
    this.snapshot = snapshot;
    this.initState();
  }

  shouldTakeSnapshot(previousSnapshot: ISnapshot): boolean {
    return previousSnapshot == null || previousSnapshot.lastEventSequence < this.version - 3;
  }

  protected abstract initState();
}
