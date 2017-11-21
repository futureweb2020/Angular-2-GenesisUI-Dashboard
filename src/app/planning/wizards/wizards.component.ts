import { Component, OnInit, EventEmitter } from '@angular/core';

import { DxListModule } from 'devextreme-angular';
import { WizardService } from "app/core/old-mocks/services/wizard.service";

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.scss'],
  providers: [WizardService]
})
export class WizardsComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  wizards = [];

  openModal: EventEmitter<any> = new EventEmitter<any>();

  showNewWizardModal():void {
    this.openModal.emit(null);
  }

  getWizards(): void {
  	this.wizards = this.wizardService.getWizards();
  }

  ngOnInit() {
  	this.getWizards();
  }

  removeWizard($event) {
    var idx = this.wizards.indexOf($event);
    this.wizards.splice(idx, 1);
  }
}
