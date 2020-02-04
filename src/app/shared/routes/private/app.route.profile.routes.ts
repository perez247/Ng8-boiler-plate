import { IRoutePath } from '../app.routes';

export class AppPrivtaeProfileRoute {

    /**
     * @description The initial/default aboslute url for users profile
     */
    static $absolutePath = `private/profile`;

    /**
     * @description The name of the url for registering in routing module
     */
    static $name = `profile`;

    /**
     * @description Get the url string for routing to the intro section of a user's profile page
     * @param {string} id the id of the user intro to display
     * @returns {IRoutePath}
     */
    static intro(id: string = ':id'): IRoutePath {
        return {
            $name: `${id}/intro`,
            $absolutePath: `${AppPrivtaeProfileRoute.$absolutePath}/${id}/intro`,
        };
    }

    /**
     * @description Get the url string for routing to the project section of a user's profile page
     * @param {string} id the id of the user projects to display
     * @returns { IRoutePath }
     */
    static projects(id: string = ':id'): IRoutePath {
        return {
            $name: `${id}/projects`,
            $absolutePath: `${AppPrivtaeProfileRoute.$absolutePath}/${id}/projects`,
        };
    }

    /**
     * @description Get the url string for routing to the project section of a user's profile page
     * @param {string} id the id of the user projects to display
     * @returns { IRoutePath }
     */
    static communities(id: string = ':id'): IRoutePath {
        return {
            $name: `${id}/communities`,
            $absolutePath: `${AppPrivtaeProfileRoute.$absolutePath}/${id}/communities`,
        };
    }

}
