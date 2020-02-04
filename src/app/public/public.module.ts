import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublicComponentsModule } from './modules/public-components.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [],
  imports: [

    // Import the routing module
    PublicRoutingModule,

    // Shared module contains the common entity required by all other modules
    SharedModule,

    // All Components used within the public section of the app should be stored in here
    PublicComponentsModule,
  ],

    // I honestly don't know why I export them but they've been working for me hahahahahahahah
  exports: [
    SharedModule,
    PublicComponentsModule
  ],

    // Modals specify to the public should be stored here, but I doubt we will have one.
  entryComponents: []
})

/**
 * @description all the neccessary components, modules, services required by the public will be stored in here
 */
export class PublicModule { }
