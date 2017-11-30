import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

	uploadDeadline = new Date();

	pieces = [
		{
			type: 'practice',
			name: 'PieceName',
			duration: 30,
			numBars: 5
		}
	];

  constructor() { }

  ngOnInit() {
  }

}
