import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.serverApi + '/auth';

  constructor(private http: HttpClient) { }

  /**
   * @description Send request to create new user
   * @param user user data
   */
  signUp(user: any) {
    return this.http.post(`${this.api}/signup`, user);
  }

  /**
   * @description Send request to verify email address
   * @param data data:
   */
  verifyEmail(data: any) {
    // The token has to be encoded
    data.token = encodeURIComponent(data.token);
    return this.http.post(`${this.api}/verify-email`, data);
  }

  /**
   * @description request to resend email verification link to users email can make sure email is sent only after 10 mins of delay
   * That can be added to the token
   * @param data data:
   */
  resendEmailConfirmLink(data: any) {
    return this.http.post(`${this.api}/resend-confirm-email`, data);
  }

  /**
   * @description request to signin a user
   * @param data data:
   */
  signinUser(data: any) {
    // your code for checking credentials and getting tokens for for signing in user
    return this.http.post(`${this.api}/signin`, data);
  }

  /**
   * @description request to change password
   * @param data data:
   */
  sendForgotPasswordEmail(data: any) {
    // resend-confirm-email
    return this.http.post(`${this.api}/forgot-password`, data);
  }

  /**
   * @description for changing the password if user has forgotten
   */
  resetPassword(data: any) {
    data.token = encodeURIComponent(data.token);
    return this.http.post(`${this.api}/reset-password`, data);
  }

}
