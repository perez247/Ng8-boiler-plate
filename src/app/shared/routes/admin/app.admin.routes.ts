import { IRoutePath } from '../app.routes';

/**
 * @description All the routes for the admin page
 */

export class AppAdminRoutes {
  /**
   * @description absolute path to admin section
   */
  static $absolutePath = `admin`;

  /**
   * @description name mostly used for routing.module.ts
   */
  static $name = `admin`;

  /**
   * @description get the url for routing to the dashboard of the admin page
   * @returns {IRoutePath}
   */
  static dashboard(): IRoutePath {
    return {
      $name: `dashboard`,
      $absolutePath: `${AppAdminRoutes.$absolutePath}/dashboard`
    };
  }

}
