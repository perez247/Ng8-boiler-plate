import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/shared/state/store';
import { AppRoute } from 'src/app/shared/routes/app.routes';
import { AuthUserActionConstant } from 'src/app/shared/state/auth-user-state/auth-user-action-constant';

@Injectable()
/**
 * @description only allow authenticated user visit the part of the application
 */
export class SharedLogout implements CanActivate {

    // get all the routes for the application
    appRoute = AppRoute.generateRoutes();

    constructor(private redux: NgRedux<IAppState>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        this.redux.dispatch({ type: AuthUserActionConstant.LOG_OUT });

        this.router.navigate([`/${this.appRoute.public.home().$absolutePath}`]);

        return false;
    }
}




