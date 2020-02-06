import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

/**
 * @description Thses are common validators that may be required in the application
 */
export class CommonValidator {

  /**
   * Confirms the value of this field and the field given in the parameter
   * @param field the field to compare with
   */
  static confirmation(field: string): ValidatorFn {
    return (c: AbstractControl) => {
      const parent = c.parent;
      if (!parent) {
          return null;
      }

      const originalField = parent.get(field).value ?  parent.get(field).value : null;
      if (originalField === c.value) {
          return null;
      }

      return { invalidConfirmation: true, message: `field must match ${field}` };
    };
  }

/**
 * @description verify password follows pattern, I know there is a pattern validator, I was just trying to be smart
 * @param pattern The pattern a password should follow
 * @param errorMessage Error message is pattern did not correspond
 */
  static ValidPassword(
    pattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_#£~|])[A-Za-z\\d@$!%*?&_#£~|]{5,}$',
    errorMessage: string = `Min 5 chars with one lowercase, uppercase, special char and number`
  ): ValidatorFn {
    return (c: AbstractControl) => {
      const reg  = new RegExp(pattern);

      const result = reg.test(c.value);

      if (result) {
          return null;
      }

      return {invalidPassword: true, message: errorMessage};

    };
  }
}
