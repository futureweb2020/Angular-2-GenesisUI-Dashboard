import {ActivityCatalogEntry} from "./activity-catalog-entry";
export interface ActivityCatalog {
  date: Date,
  version:string,
  entries:ActivityCatalogEntry[]
}
