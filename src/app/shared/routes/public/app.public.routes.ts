import { IRoutePath } from '../app.routes';

export class AppPublicRoute {

    /**
     * @description The initial/default aboslute url for users when they visit the application
     */
    static $absolutePath = `public`;

    /**
     * @description The name of the url for registering in routing module
     */
    static $name = `public`;


    /**
     * @description Get the url string for routing to the home/feeds page which should be the initial/default page when visiting the site
     * @returns {IRoutePath}
     */
    static home(): IRoutePath {
        return {
            $name: `home`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/home`
        };
    }

    /**
     * @description Get the url string for routing to the sign in page
     * @returns {IRoutePath}
     */
    static signIn(): IRoutePath {
        return {
            $name: `signin`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/signin`
        };
    }

    /**
     * @description Get the url string for routing to the sign up page
     * @returns {IRoutePath}
     */
    static signUp(): IRoutePath {
        return {
            $name: `signup`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/signup`
        };
    }

    /**
     * @description Get the url string for routing to the page to verify users email address
     * @returns {IRoutePath}
     */
    static verifyEmail(): IRoutePath {
        return {
            $name: `verify-email`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/verify-email`
        };
    }

    /**
     * @description Get the url string for routing to request for change of password
     * @returns {IRoutePath}
     */
    static forgotPassword(): IRoutePath {
        return {
            $name: `forgot-password`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/forgot-password`
        };
    }

    /**
     * @deprecated Forgot password should replace this. Please do not use and Im testing if you do read the comments
     * and I'v always wanted to use deprecated. If you did read this send me 'Adogowam' and Ill understand.
     * @description Get the url string for routing to request to reset your password
     * @returns {IRoutePath}
     */
    static resetPassword(): IRoutePath {
        return {
            $name: `reset-password`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/reset-password`
        };
    }

    /**
     * @description Get the url string for routing to the page to request for new verification email sent
     * @returns {IRoutePath}
     */
    static sendEmailVerification(): IRoutePath {
        return {
            $name: `send-email-verification`,
            $absolutePath: `${AppPublicRoute.$absolutePath}/send-email-verification`
        };
    }
}

