import { Component, OnInit } from '@angular/core';

import { WizardService } from "app/core/old-mocks/services/wizard.service";
import { WizardType } from "app/core/old-mocks/models/wizard-type.enum";

@Component({
  selector: 'app-add-from-wizard-steps',
  templateUrl: './add-from-wizard-steps.component.html',
  styleUrls: ['./add-from-wizard-steps.component.scss'],
  providers: [WizardService]
})
export class AddFromWizardStepsComponent implements OnInit {

	WizardType = WizardType;
  wizards = [];
  selectedWizard = {};
  selectedId:string = "";

  constructor(private wizardService: WizardService) { }

  getWizards(): void {
  	this.wizards = this.wizardService.getWizards();
  }

  ngOnInit() {
  	this.getWizards();
  	this.selectedWizard = this.wizards[0] || {};
  	this.selectedId = this.selectedWizard["id"] || "";
  }

  onWizardClick():void {
  	this.selectedWizard = this.wizards.filter((wizard) => wizard.id == this.selectedId)[0];
  }

}
