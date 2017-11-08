import {IEnvelope} from "./ienvelope";
import {IEvent} from "./ievent";
export interface IEventHandler{
  handleEvent(eventToHandle : IEnvelope<IEvent>): Promise<void>;
}
