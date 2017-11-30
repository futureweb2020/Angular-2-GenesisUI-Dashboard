import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WizardCatalogueService } from "app/core/catalogs/services/wizard-catalogue.service";
import { WizardCatalog } from "app/core/catalogs/wizard-catalog";
import { WizardCatalogEntry } from "app/core/catalogs/wizard-catalog-entry";
import { WizardCatalogEntryType } from "app/core/catalogs/wizard-catalog-entry-type";
import { CatalogEntryDificulty } from "app/core/catalogs/wizard-catalog-entry-dificulty";
import { ActivityCatalogEntryGrade } from "app/core/catalogs/activity-catalog-entry-grade.enum";
import { ActivityCatalogEntryCollection } from "app/core/catalogs/activity-catalog-entry-collection.enum";
import { WizardCatalogStep } from "app/core/catalogs/wizard-catalog-step";
import { ActivityCatalogEntryTechnique } from "app/core/catalogs/activity-catalog-entry-technique.enum";
import { ObjectUtil } from "app/shared/utils/object-util";

@Component({
  selector: 'app-sel-from-ctlg',
  templateUrl: './sel-from-ctlg.component.html',
  styleUrls: ['./sel-from-ctlg.component.scss'],
  providers: [WizardCatalogueService]
})
export class SelFromCtlgComponent implements OnInit {
  WizardCatalogEntryType = WizardCatalogEntryType;

	wizardCatalogue:WizardCatalog;
	selectedWizard:any;
	filteredWizard:WizardCatalog;

  difficulties:CatalogEntryDificulty[];
  techniques:ActivityCatalogEntryTechnique[];
  grades:ActivityCatalogEntryGrade[];
  collections:ActivityCatalogEntryCollection[];

	wizardType:WizardCatalogEntryType =  WizardCatalogEntryType.Learn;
  difficulty:CatalogEntryDificulty = CatalogEntryDificulty.All;
  grade:ActivityCatalogEntryGrade = ActivityCatalogEntryGrade.All;
  collection:ActivityCatalogEntryCollection = ActivityCatalogEntryCollection.All;
  technique:ActivityCatalogEntryTechnique = ActivityCatalogEntryTechnique.All;
  keyword:string = "";

  constructor(private wizardCatalogueService: WizardCatalogueService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  	this.wizardCatalogue = this.wizardCatalogueService.getCatalogue();

    this.difficulties = [...[CatalogEntryDificulty.All], ...new Set(this.wizardCatalogue.entries.map(wizard => (wizard.steps.map(step => step.activity.difficulty))).reduce((acc, difficulties) => acc.concat(difficulties), []))];
    this.techniques = [...[ActivityCatalogEntryTechnique.All], ...new Set(this.wizardCatalogue.entries.map(wizard => (wizard.steps.map(step => step.activity.technique))).reduce((acc, techniques) => acc.concat(techniques), []))];
    this.grades = [...[ActivityCatalogEntryGrade.All], ...new Set(this.wizardCatalogue.entries.map(wizard => (wizard.steps.map(step => step.activity.grade))).reduce((acc, grades) => acc.concat(grades), []))];
    this.collections = [...[ActivityCatalogEntryCollection.All], ...new Set(this.wizardCatalogue.entries.map(wizard => (wizard.steps.map(step => step.activity.collection))).reduce((acc, collections) => acc.concat(collections), []))];

    this.filteredWizard = {...this.wizardCatalogue} //shallow copy
    this.selectedWizard = this.filteredWizard.entries[0] || {};
    this.onWizardFilterChange();
  }

  onWizardClick(event:any):void {
  	this.selectedWizard = this.filteredWizard.entries[event.itemIndex];
  }

  onWizardFilterChange() {
    new Promise((resolve, reject) => {
      this.filteredWizard.entries = this.wizardCatalogue.entries.filter((wizard) => {
        return wizard.type == this.wizardType
          && (this.difficulty == CatalogEntryDificulty.All || wizard.steps.findIndex(s => s.activity.difficulty == this.difficulty) != -1)
          && (this.technique == ActivityCatalogEntryTechnique.All || wizard.steps.findIndex(s => s.activity.technique == this.technique) != -1)
          && (this.grade == ActivityCatalogEntryGrade.All || wizard.steps.findIndex(step => step.activity.grade == this.grade) != -1)
          && (this.collection == ActivityCatalogEntryCollection.All || wizard.steps.findIndex(s => s.activity.collection == this.collection) != -1)
          && (this.keyword.trim() == "" || ObjectUtil.containsString(wizard, this.keyword));
      }, this);
      resolve();
    }).then(() => {
      this.selectedWizard = this.filteredWizard.entries[0] || {};
      this.ref.detectChanges();
    });
  }
}
