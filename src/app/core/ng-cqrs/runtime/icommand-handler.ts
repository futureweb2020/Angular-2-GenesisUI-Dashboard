import {IEnvelope} from "./ienvelope";
import {ICommand} from "./icommand";
export interface ICommandHandler{
  handleCommand(commandToHandle : ICommand): Promise<boolean>;
}
