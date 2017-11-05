import {WizardCatalogEntryType} from "./wizard-catalog-entry-type";
import {WizardCatalogStep} from "./wizard-catalog-step";
import {CatalogEntryDificulty} from "./wizard-catalog-entry-dificulty";
import {ActivityCatalogEntryTechnique} from "./activity-catalog-entry-technique.enum";
import {ActivityCatalogEntryGrade} from "./activity-catalog-entry-grade.enum";
import {ActivityCatalogEntryCollection} from "./activity-catalog-entry-collection.enum";

export interface WizardCatalogEntry {
  telmiId:string,
  id:string,
  type:WizardCatalogEntryType,
  name: string,
  author: string,
  desc: string,
  steps: WizardCatalogStep[],
  difficulty:CatalogEntryDificulty,
  tags: string[]
  }
