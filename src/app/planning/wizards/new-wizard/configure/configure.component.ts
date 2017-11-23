import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {

	uploadDeadline: Date = new Date();
  dueTime: Date = new Date();
  settingUploadDeadline = false;
  settingDueTime = false;
  numBars = 5;

  @Output() onGoto = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  goto(step: number) {
    this.onGoto.next(step);
  }

}
