import { Injectable } from '@angular/core';
import { IServerError } from 'src/app/shared/domain/AppErrors';
import { FormGroup } from '@angular/forms';
import * as lodash from 'lodash';
import { NotifyService } from '../notify/notify.service';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  constructor(private notify: NotifyService) { }

  /**
   * @description get the errors sent from the server and place them in the right control of the form
   * @param error Error from the server
   * @param reactiveForm Form to place error message
   */
  setFormErrors(error: any, reactiveForm: FormGroup) {

    // Get the error part
    const appError = error.error as IServerError;

    // Check if there are actually errors
    if (lodash.isEmpty(appError.errors)) { return; }

    // Return the updated form
    return this.populateForm(appError, reactiveForm);
  }

  private populateForm(appError: IServerError, reactiveForm: FormGroup) {
    // For developers only to see error that dont follow the normal convention
    const developerError: any[] = [];

    // Get the first onces and place in the form control
    Object.keys(appError.errors).forEach((props: string) => {

      // Check if props actually exists in form all neccessaries should be include
      if (props in reactiveForm.controls) {
        reactiveForm.controls[props].setErrors( { message: appError.errors[props][0], serverError: true  } );
      } else {
        // Store the last one in the variable only for developers to see
        developerError.push(appError.errors[props]);
      }

    });

    // Make a notification if in development stage
    this.notifyDevelopersOnly(appError, developerError);

    return reactiveForm;
  }

  private notifyDevelopersOnly(appError: IServerError, developerError: any[]) {
    if (!appError.stackTrace) {
      this.notify.error('Please check more errors in console: for developers only');
      console.log(developerError);
      console.log(appError);
    }
  }
}
