import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/shared/state/store';
import { AppRoute } from 'src/app/shared/routes/app.routes';
import { AuthUserActionConstant } from 'src/app/shared/state/auth-user-state/auth-user-action-constant';

@Injectable()
/**
 * @description if user is already logged in then redirect them to the private home page
 */
export class PrivateRedirectAuthenticatedUser implements CanActivate {

    // get all the routes for the application
    appRoute = AppRoute.generateRoutes();

    constructor(private redux: NgRedux<IAppState>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const token = this.redux.getState().authUser.authToken;

        // Check if there is a token and the token has not expired then redirect the user back to the private page
        if (token && !token.isExpired) {

            this.router.navigate([`/${this.appRoute.private.$absolutePath}`]);

            return true;
        }

        return true;
    }
}




