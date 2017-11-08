import {EventBus} from "./event-bus";
import {Observable} from "rxjs";
import {IEvent} from "./ievent";
export abstract class DomainEventListener {
  constructor(private eventBus:EventBus){
    let stream$:Observable<IEvent>=eventBus.stream$;
    stream$.filter(event=>typeof this["on" + event.name] == 'function')
      .subscribe(event=>this["on" + event.name](event));
  }
}
