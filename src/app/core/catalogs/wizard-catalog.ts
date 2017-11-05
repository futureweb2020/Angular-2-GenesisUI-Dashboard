import {WizardCatalogEntry} from "./wizard-catalog-entry";

export interface WizardCatalog {
  date: Date,
  version:string,
  entries:WizardCatalogEntry[]
}
