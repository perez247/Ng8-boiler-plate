import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

import { SharedSnackBarFunctions, IAppSnackBar } from './shared-snackbar-functions';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-shared-snackbar',
  templateUrl: './shared-snackbar.component.html',
  styleUrls: ['./shared-snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedSnackbarComponent implements OnInit {

  iconSet = SharedSnackBarFunctions.getIcons();

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: IAppSnackBar, private snackbarRer: MatSnackBarRef<SharedSnackbarComponent>) { }

  ngOnInit() {
  }

  closeSnackbar() {
    this.snackbarRer.dismiss();
  }

}
