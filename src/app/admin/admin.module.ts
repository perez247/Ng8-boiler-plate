import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminComponentsModule } from './modules/admin-components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [

    // Import the routing module
    AdminRoutingModule,

    // Shared module contains the common entity required by all other modules
    SharedModule,

    // All Components used within the private section of the app should be stored in here
    AdminComponentsModule,
  ],

    // I honestly don't know why I export them but they've been working for me hahahahahahahah
  exports: [
    SharedModule,
    AdminComponentsModule
  ],

    // Modals specify to the public should be stored here, but I doubt we will have one.
  entryComponents: []
})

/**
 * @description all the neccessary components, modules, services required by the Private section will be stored in here
 */
export class AdminModule { }
