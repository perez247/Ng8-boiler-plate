import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './shared/state/store';
import { AuthUserActionConstant } from './shared/state/auth-user-state/auth-user-action-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Boiler Plate';

  constructor(private redux: NgRedux<IAppState>) {}

  ngOnInit() {
    // Set authentication token if present
    this.redux.dispatch({type: AuthUserActionConstant.SET_AUTH_USER});
  }
}
