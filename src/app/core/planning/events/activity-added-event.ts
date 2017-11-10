import {IEvent} from "../../ng-cqrs/runtime/ievent";
import {Activity} from "../domain/activity";
import {IVersionedEvent} from "../../ng-cqrs/runtime/iversioned-event";

export interface ActivityAddedEvent extends IVersionedEvent {
  data: {
    activity: Activity
  }
}
