
/**
 * @description Interface the reppresent all the actions used to manipulate the state (data) of the logged in
 * (or not) user
 */
export interface IAuthUserActionConstant {

  /**
   * @description Save authentication state/data of the logged in user
   */
  SAVE_AUTH_USER: string;

  /**
   * @description Update authentication  the state/data of the logged in user
   */
  SET_AUTH_USER: string;

  /**
   * @description remove authentication state/data of the user from the application and possibly any storage
   */
    LOG_OUT: string;

}

/**
 * @description the implementation of the IAuthUserActionConstant
 */
export const AuthUserActionConstant: IAuthUserActionConstant = {
    SAVE_AUTH_USER: 'SAVE_AUTH_USER',
    SET_AUTH_USER: 'SET_AUTH_USER',
    LOG_OUT: 'LOG_OUT',
};

