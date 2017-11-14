import { Component, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

	private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private isRelatedToModal(el: any) {
    var classes = el.className.split(" ");
    for (var cls of classes) {
      if (cls.startsWith("modal"))
        return true;
    }
    return false;
  }

  private isInsideModal(el: any) {
    do {
      if (this.isRelatedToModal(el))
        return true;

      el = el.parentElement;
    } while (el);

    return false;
  }

  constructor(private dragulaService: DragulaService) {
  	var self = this;
  	this.dragulaService.setOptions('activities', {
  		copy: true,
      accepts: function (el, target, source, sibling) {
      	if (self.hasClass(target, 'drop-pane'))
      		return true;
	  		return false; // elements can be dropped in any of the `containers` by default
			},
      moves: function (el, source, handle, sibling) {
        if (self.hasClass(el, 'activity')) {
          if (self.isInsideModal(handle)) {
            return false;
          }
        }
        return true; // elements are always draggable by default
      }
    });
  }

  ngOnInit() { }

}
