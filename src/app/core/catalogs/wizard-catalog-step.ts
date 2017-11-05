import {ActivityCatalogEntry} from "./activity-catalog-entry";
export interface WizardCatalogStep {
  id: number,
  name: string,
  activityId: string, // TelmiId for activity entry referenced
  about: string
  activity?:ActivityCatalogEntry
}
