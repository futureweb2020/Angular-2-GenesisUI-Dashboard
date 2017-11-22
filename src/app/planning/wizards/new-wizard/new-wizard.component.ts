import { Component, OnInit, Input, EventEmitter, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';
import { DxListModule } from 'devextreme-angular';

@Component({
  selector: 'app-new-wizard',
  templateUrl: './new-wizard.component.html',
  styleUrls: ['./new-wizard.component.scss']
})
export class NewWizardComponent implements OnInit {

	@ViewChild('newWizardModal') public newWizardModal:ModalDirective;

	@Input()
	openModal:EventEmitter<any>;

	step:number = 0;

  constructor() { }

  showModal():void {
    this.step = 0;
  	this.newWizardModal.show();
  }

  addWizard():void {
  	this.newWizardModal.hide();
  }

  ngOnInit() {
  	this.openModal.subscribe(item => this.showModal());
  }

  goto($event) {
    this.step = $event;
  }

}
