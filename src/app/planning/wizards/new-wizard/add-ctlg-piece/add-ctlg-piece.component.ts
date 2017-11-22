import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivityCatalogueService } from "app/core/catalogs/services/activity-catalogue.service";
import { ActivityCatalog } from "app/core/catalogs/activity-catalog";
import { ActivityCatalogEntry } from "app/core/catalogs/activity-catalog-entry";
import { ActivityType } from "app/core/planning/domain/activity-type.enum";
import { ActivityCatalogEntryGrade } from "app/core/catalogs/activity-catalog-entry-grade.enum";
import { ActivityCatalogEntryCollection } from "app/core/catalogs/activity-catalog-entry-collection.enum";
import { CatalogEntryDificulty } from "app/core/catalogs/wizard-catalog-entry-dificulty";
import { ActivityCatalogEntryTechnique } from "app/core/catalogs/activity-catalog-entry-technique.enum";
import { ObjectUtil } from "app/shared/utils/object-util";


@Component({
  selector: 'app-add-ctlg-piece',
  templateUrl: './add-ctlg-piece.component.html',
  styleUrls: ['./add-ctlg-piece.component.scss'],
  providers: [ActivityCatalogueService]
})
export class AddCtlgPieceComponent implements OnInit {

  ActivityType = ActivityType;

	activityCatalogue:ActivityCatalog;
	selectedActivity:any;
	filteredActivities:ActivityCatalog;

  difficulties:CatalogEntryDificulty[];
  techniques:ActivityCatalogEntryTechnique[];
  grades:ActivityCatalogEntryGrade[];
  collections:ActivityCatalogEntryCollection[];

  keyword:string = "";
	activityType:ActivityType = ActivityType.Exercise;
  difficulty:CatalogEntryDificulty = CatalogEntryDificulty.All;
  technique:ActivityCatalogEntryTechnique = ActivityCatalogEntryTechnique.All;
  grade:ActivityCatalogEntryGrade = ActivityCatalogEntryGrade.All;
  collection:ActivityCatalogEntryCollection = ActivityCatalogEntryCollection.All;

  constructor(private activityCatalogueService: ActivityCatalogueService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  	this.activityCatalogue = this.activityCatalogueService.getCatalogue();
    
    this.difficulties = [...[CatalogEntryDificulty.All], ...new Set(this.activityCatalogue.entries.map(activity => activity.difficulty))];
    this.techniques = [...[ActivityCatalogEntryTechnique.All], ...new Set(this.activityCatalogue.entries.map(activity => activity.technique))];
    this.grades = [...[ActivityCatalogEntryGrade.All], ...new Set(this.activityCatalogue.entries.map(activity => activity.grade))];
    this.collections = [...[ActivityCatalogEntryCollection.All], ...new Set(this.activityCatalogue.entries.map(activity => activity.collection))];

    this.filteredActivities = {...this.activityCatalogue};
    this.selectedActivity = this.filteredActivities.entries[0] || {};
    this.onActivityFilterChange();
  }

  onActivityClick(event:any):void {
  	this.selectedActivity = this.filteredActivities.entries[event.itemIndex];
  }

  onActivityFilterChange() {
    new Promise((resolve, reject) => {
      this.filteredActivities.entries = this.activityCatalogue.entries.filter((activity) => {
        return activity.type == this.activityType
          && (this.technique == ActivityCatalogEntryTechnique.All || activity.technique == this.technique)
          && (this.difficulty == CatalogEntryDificulty.All || activity.difficulty == this.difficulty)
          && (this.grade == ActivityCatalogEntryGrade.All || activity.grade == this.grade)
          && (this.collection == ActivityCatalogEntryCollection.All || activity.collection == this.collection)
          && (this.keyword.trim() == "" || ObjectUtil.containsString(activity, this.keyword));
      }, this);
      resolve();
    }).then(() => {
      this.selectedActivity = this.filteredActivities.entries[0] || {};
      this.ref.detectChanges();
    });
  }

}
