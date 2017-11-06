import { StepViewModel } from '../step/step.viewmodel';
import { WizardType } from "./wizard-type.enum";
import { WizardStatus } from "./wizard-status.enum";
import { WizardSource } from "./wizard-source.enum";

export interface WizardViewModel {
  id: string,
  name: string,
  type: WizardType,
  status: WizardStatus,
  source: WizardSource,
  steps: StepViewModel[],
}
