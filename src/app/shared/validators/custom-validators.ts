import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AppConstants } from '../domain/constants';


/**
 * @description The purpose of custom validator is mainly to add custom message here rather than in the html
 * Along the line I found out more interesting things I could do with this
 * Simply visit the file to find out more
 */
export class CustomValidator {

  /**
   * @description — Validator that requires the control have a non-empty value.
   * @param visibleFieldName The field name to attached the error message to
   */
  static CustomRequired(visibleFieldName: string): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.required(c);

      if (!result) {
          return null;
      }

      return {...result, message: `${visibleFieldName} is required`};
    };
  }

  /**
   * @description Validator that requires the control's value be true. This validator is commonly used for required checkboxes.
   * @param visibleFieldName The field name to attached the error message to
   */
  static CustomRequiredTrue(visibleFieldName: string): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.requiredTrue(c);

      if (!result) {
          return null;
      }

      return {...result, message: `${visibleFieldName} must be selected`};
    };
  }

  /**
   * @description Validator that requires the control's value pass an email validation test.
   */
  static CustomEmail(): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.email(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Email is invalid`};
    };
  }

  /**
   * @description — Validator that requires the length of the control's value to be less than or equal to the provided maximum length.
   * This validator is also provided by default if you use the the HTML5 maxlength attribute.
   * @param maxLength The maximum length of the string
   */
  static MaxLength(maxLength: number): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.maxLength(maxLength)(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Not more than ${maxLength} characters`};
    };
  }

  /**
   * @description — Validator that requires the length of the control's value to be greater than or equal to the provided minimum length.
   * This validator is also provided by default if you use the the HTML5 minlength attribute.
   * @param minLength The minimum length of the string
   */
  static MinLength(minLength: number): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.minLength(minLength)(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Not less than ${minLength} characters`};
    };
  }

  /**
   * @description Valids a string is a valid date
   * @param fieldName The field name to attached the error message to
   */
  static CustomValidDate(fieldName: string): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.parent) { return null; }

      if (moment.isDate(c.parent.get(fieldName).value)) { return null; }

      return { message: `Date is invalid`};
    };
  }

  /**
   * @deprecated Please dont use this code, it has some serious bug (uder maintenance)
   * @description Valid the date fall within a certain range
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomValidDateRange(fieldName: string, minDate: Date, maxDate: Date): ValidatorFn {
    return (c: AbstractControl) => {

      const validDate = CustomValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      const dob = moment(c.value);

      if (dob.isAfter(moment(maxDate)) || dob.isBefore(moment(minDate))) {
          return { message: `Must be  between ${AppConstants.MAX_DATE} and ${AppConstants.MIN_DATE} years old`};
      }

      return null;

    };
  }
}
