import { AppPublicRoute } from './public/app.public.routes';
import { AppPrivateRoute } from './private/app.private.routes';
import { AppAdminRoutes } from './admin/app.admin.routes';

/**
 * @description This class is responsible for getting all the routes in the application
 */
export class AppRoute {

    static generateRoutes() {
        return {
            /**
             * @description get the urls for the public part of the application
             * @returns AppPublicRoute as a class
             */
            public : AppPublicRoute,

            /**
             * @description get the urls for the private part of the application
             * @returns AppPrivateRoute
             */
            private : AppPrivateRoute,

            /**
             * @description get the urls for the admin part of the application
             * @returns AppAdminRoutes
             */
            admin : AppAdminRoutes,

            /**
             * @description logouts and redirect to the sign page
             * @returns string
             */
            logout : `logout`,
        };
    }
}

/**
 * @description The interface use for any route
 */
export interface IRoutePath {
  /**
   * @description The name of the route which is used in registering the route to a component in the routing module file
   */
  $name: string;


  /**
   * @description The absolute path of the route which is used to nagivate to the page
   */
  $absolutePath: string;
}
