import { AppPrivtaeHomeRoute } from './app.private.home.routes';
import { AppPrivtaeProfileRoute } from './app.route.profile.routes';

// All the url path for private resources
export class AppPrivateRoute {

    static $absolutePath = `private`;
    static $name = `private`;

    /**
     * @description all url routes within the home page
     * @return AppPrivateHomeRoute
     */
    static home = AppPrivtaeHomeRoute;

    /**
     * @description all url routes within the profile page
     * @return AppPrivtaeProfileRoute
     */
    static profile = AppPrivtaeProfileRoute;

}



