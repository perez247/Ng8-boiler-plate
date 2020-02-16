import { NgModule } from '@angular/core';
import { SharedNotFoundComponent } from '../../pages/shared-not-found/shared-not-found.component';
import { SharedModule } from '../../shared.module';
import { ValidatorErrorMessageComponent } from '../../validators/validator-error-message/validator-error-message.component';
import { SharedCommonModule } from './shared-common.module';
import { SharedSnackbarComponent } from '../../modals/shared-snackbar/shared-snackbar.component';

@NgModule({

  // Decalre compoments
  declarations: [
    SharedNotFoundComponent,
    ValidatorErrorMessageComponent,
  ],


  imports: [
    SharedCommonModule
  ],

  // Export components to be used by all modules and components of the shared section
  exports: [
    SharedNotFoundComponent,
    ValidatorErrorMessageComponent,
  ],

// Components that are called at runtime: [
  entryComponents: [
    SharedSnackbarComponent,
  ],
})


/**
 * @description Shared module contains all the components and services commonly used by all other modules
 */
export class SharedComponentsModule { }
