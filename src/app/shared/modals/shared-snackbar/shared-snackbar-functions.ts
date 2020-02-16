
import { faTimes, faTimesCircle, faCheckCircle, faExclamationTriangle, faExclamation } from '@fortawesome/free-solid-svg-icons';

export class SharedSnackBarFunctions {

  static getIcons() {
    return {
      success : {
        cssColor: 'text-success',
        fontIcon: faCheckCircle,
      },
      error: {
        cssColor: 'text-danger',
        fontIcon: faTimesCircle,
      },
      warning: {
        cssColor: 'text-warning',
        fontIcon: faExclamationTriangle,
      },
      message: {
        cssColor: 'text-dark',
        fontIcon: faExclamation
      },

      // Just the icon for closing the snackbar
      default: {
        cssColor: 'text-color',
        fontIcon: faTimes
      }
    };
  }

}

export interface IAppSnackBar {
  message: string;
  type: string;
}
