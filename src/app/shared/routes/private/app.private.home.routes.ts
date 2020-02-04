import { IRoutePath } from '../app.routes';

/**
 * @description All the routes/url found in the home page
 */

export class AppPrivtaeHomeRoute {



    /**
     * @description The initial/default aboslute url for logged users to the home page
     */
    static $absolutePath = `private/home`;





    /**
     * @description The name of the url in private
     */
    static $name = `home`;


    /**
     * @description Get the url string for routing to the posts
     * @param {string} type the type of the post to show, either 'user' for
     * personal posts or 'global' for all post based on location. defualt is :type for
     * routing.module.ts
     * @returns {IRoutePath}
     */
    static posts(type: string = ':type'): IRoutePath {
        return {
            $name: `posts/${type}`,
            $absolutePath: `${AppPrivtaeHomeRoute.$absolutePath}/posts/${type}`,
        };
    }


    /**
     * @description get the url for routing to the map
     * @returns {IRoutePath}
     */
    static map(): IRoutePath {
        return {
            $name: `map`,
            $absolutePath: `${AppPrivtaeHomeRoute.$absolutePath}/map`
        };
    }





}
