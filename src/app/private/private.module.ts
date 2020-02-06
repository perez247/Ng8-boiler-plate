import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrivateComponentsModule } from './modules/private-components.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [

    // Import the routing module
    PrivateRoutingModule,

    // Shared module contains the common entity required by all other modules
    SharedModule,

    // All Components used within the private section of the app should be stored in here
    PrivateComponentsModule,
  ],

    // I honestly don't know why I export them but they've been working for me hahahahahahahah
  exports: [
    SharedModule,
    PrivateComponentsModule
  ],

    // Modals specify to the public should be stored here, but I doubt we will have one.
  entryComponents: []
})

/**
 * @description all the neccessary components, modules, services required by the Private section will be stored in here
 */
export class PrivateModule { }
