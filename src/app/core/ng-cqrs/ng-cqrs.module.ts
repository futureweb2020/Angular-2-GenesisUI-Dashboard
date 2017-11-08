import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DexieStore} from "./dexie/dexie-store";
import {HandlerRegistry} from "./runtime/handler-registry";
import {CommandHandlerMiddleware} from "./ngrx/command-handler-middleware";
import {DomainRepository} from "./runtime/domain-repository";
import {EventBus} from "./runtime/event-bus";
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";
import {DatabaseService} from "./rxdb/database.service";

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [],
  providers: [
    DexieStore,
    HandlerRegistry,
    EventBus,
    {provide: 'IEventSourcedRepository', useExisting: DexieStore},
    {provide: 'ISnapshotRepository', useExisting: DexieStore},
    {provide: 'IEventHandler', useExisting: EventBus},
    {provide: 'ICommandHandler', useExisting: HandlerRegistry},
    CommandHandlerMiddleware,
    DomainRepository,
    DatabaseService
  ]
})
export class NgCqrsModule {
}
