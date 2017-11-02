import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DragulaModule } from 'ng2-dragula';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {NgCqrsModule} from "./core/ng-cqrs/ng-cqrs.module";
import {PlanningModule} from "./core/planning/planning.module";
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";
import {CommandHandlerMiddleware} from "./core/ng-cqrs/ngrx/command-handler-middleware";
import logger from 'redux-logger'
import {CatalogsModule} from "./core/catalogs/catalogs.module";


export interface IAppState{};
export const appReducer = (state: IAppState, action): IAppState => {
  return state;
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    ChartsModule,
    DragulaModule,
    NgReduxModule,
    NgCqrsModule,
    PlanningModule,
    CatalogsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(store: NgRedux<IAppState>, commandHandler:CommandHandlerMiddleware,devTools: DevToolsExtension) {
    store.configureStore(
      appReducer ,
      {},
      [ commandHandler.createMiddleWare(),
        logger ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
