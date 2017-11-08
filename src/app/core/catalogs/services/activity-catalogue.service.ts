import { Injectable } from '@angular/core';
import {ActivityCatalog} from "../activity-catalog";

let activityCatalogJSON = require('../mockups/activity-catalogue/activity-catalogue.mockup.json');

//transform each entryId into entries/entryId/index.json object
activityCatalogJSON.entries = activityCatalogJSON.entries.map(
  entryId => require('../mockups/activity-catalogue/entries/' + entryId + '/index.json')
)

@Injectable()
export class ActivityCatalogueService {

  constructor() { }

  getCatalogue():ActivityCatalog {
  	return activityCatalogJSON;
  }
}
