import {ActivityCatalogEntryTechnique} from "./activity-catalog-entry-technique.enum";
import {ActivityCatalogEntryGrade} from "./activity-catalog-entry-grade.enum";
import {ActivityCatalogEntryCollection} from "./activity-catalog-entry-collection.enum";
import {CatalogEntryDificulty} from "./wizard-catalog-entry-dificulty";
import {ActivityType} from "../planning/domain/activity-type.enum";

export interface ActivityCatalogEntry {
  telmiId:string,
  id:string,
  name: string,
  desc: string,
  composer: string,
  type: ActivityType
  difficulty:CatalogEntryDificulty,
  technique: ActivityCatalogEntryTechnique,
  grade: ActivityCatalogEntryGrade,
  collection: ActivityCatalogEntryCollection
  video: string,
  score: string
}
