import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  // Get the mat snackbar from angular material
  config = new MatSnackBarConfig<any>();

  // This is just to close the notification I hope someone (or anyone can help me with providing an icon)
  settings = {
    action : 'close'
  };

  constructor(private toast: MatSnackBar) {
    this.initializeConfig();
  }

  // Basic configuration to on the snackbar before commencing
  private initializeConfig() {
    this.config.panelClass = ['bg-light'];
    this.config.duration = 20000;
    this.config.verticalPosition = 'top';
  }

  // This is to ensure the right color shows up when displaying
  private addCss(className: string) {
    this.config.panelClass = ['bg-light', 'text-center', className];
  }

  /**
   * @description Displays a success message with a green text and white background
   * @param message Message to be displayed
   */
  success(message: string) {
    this.addCss('text-success');
    this.toast.open(message, this.settings.action, {...this.config});
  }

  /**
   * @description Displays an error message with a red text and white background
   * @param message Message to be displayed
   */
  error(message: string) {
    this.addCss('text-danger');
    this.toast.open(message, this.settings.action, {...this.config});
  }

  /**
   * @description Displays a warning message with a green text and white background.
   * I honestly don't know if we will ever use this but for righteousness sack.
   * @param message Message to be displayed
   */
  warning(message: string) {
    this.addCss('text-warning');
    this.toast.open(message, this.settings.action, {...this.config});
  }

  /**
   * @description Displays a regualr message with a dark text and white background
   * @param message Message to be displayed
   */
  message(message: string) {
    this.addCss('text-dark');
    this.toast.open(message, this.settings.action, {...this.config});
  }
}
