import {ISnapshot} from "./isnapshot";
export interface ISnapshotOriginator {
  getSnapshot(): ISnapshot ;
  loadFromSnapshot(snapshot: ISnapshot): void;
  shouldTakeSnapshot(previousSnapshot: ISnapshot): boolean;
}
