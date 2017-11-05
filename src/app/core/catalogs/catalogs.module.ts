import { NgModule } from '@angular/core';
import {WizardCatalogueService} from "./services/wizard-catalogue.service";
import {ActivityCatalogueService} from "./services/activity-catalogue.service";

@NgModule({
  providers: [WizardCatalogueService, ActivityCatalogueService]
})

export class CatalogsModule { }
