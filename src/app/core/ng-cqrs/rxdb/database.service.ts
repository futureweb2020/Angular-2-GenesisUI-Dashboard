import { Injectable } from '@angular/core';
import {RxDatabase} from "rxdb";
import * as RxDB from "rxdb";
import {Observable} from "rxjs";

let collections = [
  {
    name: 'timeslot',
    schema: require('../../planning/schemas/time-slot.schema.json'),
  },
  {
    name: 'wizard',
    schema: require('../../planning/schemas/wizard.schema.json'),
  }
];

@Injectable()
export class DatabaseService {
  static dbPromise: Promise<RxDatabase> = null;
  constructor() { }

  private async _create(): Promise<RxDatabase> {
    console.log('DatabaseService: creating database..');

    RxDB.plugin(require('pouchdb-adapter-idb'));
    const db = await RxDB.create({ name: 'telmidb', adapter: 'idb'});
    console.log('DatabaseService: created database');
    window['db'] = db; // write to window for debugging


    // create collections
    console.log('DatabaseService: create collections');
    await Promise.all(collections.map(colData => db.collection(colData)));


    return db;
  }

  get(): Promise<RxDatabase> {
    if (DatabaseService.dbPromise)
      return DatabaseService.dbPromise;

    // create database
    DatabaseService.dbPromise = this._create();
    return DatabaseService.dbPromise;
  }
}
