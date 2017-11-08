import {ISnapshot} from "./isnapshot";
export interface ISnapshotRepository {
  getSnapshot(aggregateRootId: string): Promise<ISnapshot>;
  saveSnapshot(snapshot:ISnapshot);
}
