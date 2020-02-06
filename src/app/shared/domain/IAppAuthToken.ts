
/**
 * @description The interface for stored token of an authenticated user
 */
export interface IAppAuthToken {

  /**
   * @description the full string of the token
   */
  asString: string;

  /**
   * @description stores if the token has expired or not
   */
  isExpired: boolean;

  /**
   * @description The Id of the user
   */
  nameid: string;

  // I honestly dont have a clue what these means but its used by the jwt helper to determine the age of the token i guess
  nbf: string;
  exp: string;
  iat: string;
}
