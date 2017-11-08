import {NgRedux} from "@angular-redux/store";
import {ICqrsState} from "../ngrx/icqrs-state";

export class CommandHelper {
  constructor(private ngRedux: NgRedux<ICqrsState>) {
  }

  public pushCommand(command: any) {
    this.ngRedux.dispatch(this.encapsulateCommand(command));
  }

  protected encapsulateCommand(command: any) {
    return {
      type: "command",
      payload: command
    }
  }
}
