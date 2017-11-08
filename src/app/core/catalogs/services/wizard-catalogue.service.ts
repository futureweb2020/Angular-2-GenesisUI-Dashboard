import { Injectable } from '@angular/core';
import { WizardCatalog } from "../wizard-catalog";
import { ActivityCatalogueService } from "./activity-catalogue.service";

let wizardCatalogJSON: WizardCatalog = require('../mockups/wizard-catalogue/wizard-catalogue.mockup.json');

//transform each entryId into entries/entryId/index.json object
wizardCatalogJSON.entries = wizardCatalogJSON.entries.map(
  entryId => require('../mockups/wizard-catalogue/entries/' + entryId + '/index.json')
)


@Injectable()
export class WizardCatalogueService {

  constructor(private activityCatalogService: ActivityCatalogueService) {
  }

  getCatalogue(): WizardCatalog {
    let activityCatalog = this.activityCatalogService.getCatalogue();

    let catalog = {
      ...wizardCatalogJSON,
      entries: wizardCatalogJSON.entries.map(
        entry => ({
          ...entry, steps: entry.steps.map(
            step => ({
              ...step, activity: activityCatalog.entries.find(
                e => e.telmiId == step.activityId)
            }))
        }))
    };

    return catalog;
  }
}
