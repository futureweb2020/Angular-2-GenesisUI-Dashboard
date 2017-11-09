import { Injectable } from '@angular/core';

let catalogue = [
	{
		name: "Piece Learning",
		code: "22",
		type: "Learn",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Scale G",
		code: "W2",
		type: "Scales",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Wizard Name",
		code: "number",
		type: "Type",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Wizard Name",
		code: "number",
		type: "Type",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Wizard Name",
		code: "number",
		type: "Type",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Wizard Name",
		code: "number",
		type: "Type",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Wizard Name",
		code: "number",
		type: "Type",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	},
	{
		name: "Wizard Name",
		code: "number",
		type: "Type",
		desc: "Learn a piece by following one of the available strategies",
		detail: [
			"N bars per day",
			"full every day"
			],
		steps: [
			{
				name: "Practice Piece"
			},
			{
				name: "Record Piece & Upload"
			}]
	}
];

@Injectable()
export class WizardCatalogueService {

  constructor() { }

  getCatalogue() {
  	return catalogue;
  }
}
