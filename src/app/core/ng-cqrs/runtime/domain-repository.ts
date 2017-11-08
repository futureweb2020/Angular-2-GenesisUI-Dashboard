import {IDomainRepository} from "./idomain-repository";
import {AggregateRoot} from "./event-sourced";
import {IEventSourcedRepository} from "./ievent-sourced-repository";
import {ISnapshotRepository} from "./isnapshot-repository";
import {IEventHandler} from "./ievent-handler";
import {ISnapshot} from "./isnapshot";
import {Inject, Injectable} from "@angular/core";
import {inject} from "@angular/core/testing";

@Injectable()
export class DomainRepository implements IDomainRepository {
  constructor(@Inject('IEventSourcedRepository') private eventRepository: IEventSourcedRepository,
              @Inject('ISnapshotRepository') private snapshotRepository: ISnapshotRepository,
              @Inject('IEventHandler') private handlerRegistry: IEventHandler) {
  }

  async getById<TAggregateRoot extends AggregateRoot>(aggregateRootId: string, cls: {new (...args: any[]): TAggregateRoot;}): Promise<TAggregateRoot> {
    var aggregateRoot = new cls(aggregateRootId);
    var snapshot = await this.getSnapshotFromSnapshotRepository(aggregateRootId);
    var lastEventSequence = snapshot == null ? 0 : snapshot.lastEventSequence;
    var domainEvents = await this.eventRepository.getEventsByAggregateId(aggregateRootId, lastEventSequence);
    if (lastEventSequence == 0 && domainEvents.length == 0)
      return null;
    this.loadSnapshot(aggregateRoot, snapshot);
    aggregateRoot.loadFromEvents(domainEvents);
    aggregateRoot.originalVersion = aggregateRoot.version;
    return aggregateRoot;
  }

  private async getSnapshotFromSnapshotRepository(aggregateRootId: string): Promise<ISnapshot> {
    return await this.snapshotRepository.getSnapshot(aggregateRootId);
  }

  async save(aggregateRoot: AggregateRoot) {
    var originalEventCount = aggregateRoot.originalVersion;
    var eventsInStore = await this.eventRepository.getEventsByAggregateId(aggregateRoot.id, 0);
    if (eventsInStore.length != originalEventCount) {
      throw new Error("Concurrent change to Entity with id: " + aggregateRoot.id);
    }
    var domainEvents = aggregateRoot.events;
    if (domainEvents.length > 0)
      this.eventRepository.saveEventsByAggregateId(aggregateRoot.id, domainEvents);
    for (let event of domainEvents) {
      await this.handlerRegistry.handleEvent({
        type: "event",
        payload: event
      });
    }
    aggregateRoot.commitEvents();

    await this.saveSnapshot(aggregateRoot);
  }

  private loadSnapshot(aggregateRoot: AggregateRoot, snapshot: ISnapshot) {
    aggregateRoot.loadFromSnapshot(snapshot);
    aggregateRoot.id = snapshot.aggregateRootId;
    aggregateRoot.version = snapshot.lastEventSequence;
  }

  private async saveSnapshot(aggregateRoot: AggregateRoot) {
    var previousSnapshot = await this.getSnapshotFromSnapshotRepository(aggregateRoot.id);

    if (!aggregateRoot.shouldTakeSnapshot(previousSnapshot)) return;

    var snapshot = aggregateRoot.getSnapshot();
    snapshot.aggregateRootId = aggregateRoot.id;
    snapshot.lastEventSequence = aggregateRoot.version;

    this.snapshotRepository.saveSnapshot(snapshot);
  }
}
