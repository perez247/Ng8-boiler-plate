import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  // get the token class to help decode or encode jwt tokens sent from the server
  tokenHelper = new JwtHelperService();

  constructor() { }

  /**
   * @description Saves the token gotten from the server
   * @param token a string to be stored, if null nothing will be done
   */
  saveToken(token: string = null) {
    if (token) {

      // Since its a web application we are using local storage
      localStorage.setItem('token', token);
    }
  }

  /**
   * @description Gets the token from the local storage and converts it to an objects of type AppAuthToken
   * @returns {AppAuthToken} - AppAuthToken coming soon.
   */
  tokenAsObject() {
    const token = localStorage.getItem('token');
    return token ? {asString: token, isExpired: this.tokenHelper.isTokenExpired(token), ...this.decode(token)} : null;
  }

  /**
   * @description Tries to decode the token string which is stored in local storage
   * @param token token to be decoded
   * @returns {object} - object
   */
  private decode(token: string) {
    return this.tokenHelper.decodeToken(token);
  }

  /**
   * @description Clears the local storage, this is not the best approach because we might want to store other non auth related
   * objections
   */
  clear() {
    localStorage.clear();
  }
}
