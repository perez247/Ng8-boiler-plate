import { tassign } from 'tassign';
import { AuthUserActionConstant } from './auth-user-action-constant';
import { IAppAuthToken } from '../../domain/IAppAuthToken';
import { AuthTokenService } from '../../services/common/auth-token/auth-token.service';

/**
 * @description All the state/data related to the authentation of the user
 */
export interface IAuthUserAppState {
  /**
   * @description token as object sent from the server and stored in local storage
   */
  authToken: IAppAuthToken;
}

/**
 * @description implementation of IAuthUserAppState
 */
export const AUTH_USER_INITIAL_STATE: IAuthUserAppState = {
    authToken: Object.assign({}) as IAppAuthToken,
}


/**
 * @description this is just a fancy way of executing different actions related to the state/data of the authenticated user
 */
class AuthUserActions {

  constructor(private state: IAuthUserAppState, private action: any, private tokenService: AuthTokenService) {}

  /**
   * @description action to save the auth token sent by the server
   * @returns {IAppAuthToken} IAppAuthToken
   */
  saveAuthUser() {
    this.tokenService.saveToken(this.action.token);

    return tassign(this.state, { authToken: this.tokenService.tokenAsObject() });
  }

  /**
   * @description action to update the authenticated user state/data
   * @returns {IAppAuthToken} IAppAuthToken
   */
  setAuthUser() {
    return tassign(this.state, { authToken: this.tokenService.tokenAsObject() });
  }

  /**
   * @description action to log user out of the application and clear data from local storage
   * @returns {IAppAuthToken} IAppAuthToken
   */
  logout() {
    this.tokenService.clear();
    return tassign(this.state, { authToken: null});
  }

}

/**
 * @description The redux action that is being called to perform all the actions mentioned above
 * @param state The state/data to manipulate
 * @param action The type of action to use to manipulate the state/data
 */
export function authUserReducer(state: IAuthUserAppState  = AUTH_USER_INITIAL_STATE, action): IAuthUserAppState  {

  const obj = new AuthUserActions(state, action, new AuthTokenService());

  switch (action.type) {
      case AuthUserActionConstant.SAVE_AUTH_USER: return obj.saveAuthUser();
      case AuthUserActionConstant.SET_AUTH_USER: return obj.setAuthUser();
      case AuthUserActionConstant.LOG_OUT: return obj.logout();
      default: return state;
  }

}

