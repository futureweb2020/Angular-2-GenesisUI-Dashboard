import {ICommandHandler} from "./icommand-handler";
import {IEventHandler} from "./ievent-handler";
import {IEnvelope} from "./ienvelope";
import {ICommand} from "./icommand";
import {IEvent} from "./ievent";
import {Injectable} from "@angular/core";
@Injectable()
export class HandlerRegistry implements ICommandHandler, IEventHandler{
  constructor(){
    this.commandsRegistry = {};
    this.eventsRegistry = {};
  }

  commandsRegistry : any;
  eventsRegistry : any;

  registerCommandHandler(commandName: string, commandHandler : ICommandHandler){
    var handlers = this.commandsRegistry[commandName];
    if(!handlers){
      handlers = [];
    }

    handlers.push(commandHandler);
    this.commandsRegistry[commandName] = handlers;
  }

  registerEventHandler(eventName: string, eventHandler : IEventHandler){
    var handlers = this.eventsRegistry[eventName];
    if(!handlers){
      handlers = [];
    }

    handlers.push(eventHandler);
    this.eventsRegistry[eventName] = handlers;
  }

  async handleCommand(commandToHandle : ICommand):Promise<boolean>{
    var handlers = this.commandsRegistry[commandToHandle.name];
    if(!handlers) throw Error("no handler for command");

    handlers.map((handler)=>handler.handleCommand(commandToHandle));
    return true;
  }

 async handleEvent(eventToHandle : IEnvelope<IEvent>){
    var handlers = this.eventsRegistry[eventToHandle.payload.name];
    if(!handlers) return;

    handlers.map((handler) => handler.handleEvent(eventToHandle));
    return;
  }
}
