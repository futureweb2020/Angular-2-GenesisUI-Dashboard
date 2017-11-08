import {Injectable, Inject} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {ICommandHandler} from "../runtime/icommand-handler";
import {ActionsObservable, createEpicMiddleware, combineEpics} from "redux-observable";
import {ICommand} from "../runtime/icommand";
import {Observable} from "rxjs";
import {Middleware} from "redux";
import {createAction} from 'redux-actions';
import {of} from "rxjs/observable/of";


@Injectable()
export class CommandHandlerMiddleware {
  constructor(@Inject('ICommandHandler') private commandHandler: ICommandHandler) {
  }

  public createMiddleWare(): Middleware {
    return createEpicMiddleware(combineEpics(this.createEpic()));
  }

  private createEpic() {
    return action$ => action$
      .ofType("command")
      .switchMap(command =>
        Observable.fromPromise(this.commandHandler.handleCommand(command.payload as ICommand))
          .map(result => {
            return {
              type: "command_OK",
              payload: command.payload
            };
          })
          .catch(error => of({
            type: "command_ERROR",
            payload: error,
            meta: command.payload
          }))
      );
  }
}
