import {AggregateRoot} from "./event-sourced";
export interface IDomainRepository {
  getById<TAggregateRoot>(aggregateRootId:string,cls: { new (...args: any[]): TAggregateRoot; }):TAggregateRoot;
  save(aggregateRoot:AggregateRoot);
}
