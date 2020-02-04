import { NgModule } from '@angular/core';
import { SharedNotFoundComponent } from '../pages/shared-not-found/shared-not-found.component';

@NgModule({

  // Decalre compoments
  declarations: [
    SharedNotFoundComponent
  ],


  imports: [
  ],

  // Export components to be used by all modules and components of the shared section
  exports: [
    SharedNotFoundComponent
  ]
})


/**
 * @description Shared module contains all the components and services commonly used by all other modules
 */
export class SharedComponentsModule { }
