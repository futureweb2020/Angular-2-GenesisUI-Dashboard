import { Injectable } from '@angular/core';

let catalogue = [
	{
		name: "Activity name",
		code: "number",
		author: "Activity Author",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.",
		detail: [
			"Lorem ipsum dolor sit amet",
			"Consectetur adipiscing elit.",
			"Aenean euismod bibendum laoreet."
		]
	},
	{
		name: "Bow factor Exercises",
		code: "A1",
		author: "Custom (MM_DeLay)",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.",
		detail: [
			"Lorem ipsum dolor sit amet",
			"Consectetur adipiscing elit.",
			"Aenean euismod bibendum laoreet."
		]
	}
];

@Injectable()
export class ActivityCatalogueService {

  constructor() { }

  getCatalogue() {
  	return catalogue;
  }

}
