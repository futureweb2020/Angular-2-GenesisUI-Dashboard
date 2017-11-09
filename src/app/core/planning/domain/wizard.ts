import {AggregateRoot} from "../../ng-cqrs/runtime/event-sourced";
import {IWizardSnapshot} from "./iwizard-snapshot";
export class Wizard extends AggregateRoot {
  protected initState() {

  }

   get state(): IWizardSnapshot {
    return this.snapshot;
  }
}
