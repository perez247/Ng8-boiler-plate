import { NgModule } from '@angular/core';
import { SharedCommonModule } from './shared-common.module';
import { AuthService } from '../../services/api/auth/auth.service';
import { LocationService } from '../../services/api/location/location.service';
import { AuthTokenService } from '../../services/common/auth-token/auth-token.service';
import { FormErrorService } from '../../services/common/form-error/form-error.service';
import { NotifyService } from '../../services/common/notify/notify.service';
import { ErrorInterceptorProvider } from '../../interceptors/error.interceptor';
import { JwtInterceptorProvider } from '../../interceptors/jwt.interceptor';

@NgModule({
  declarations: [],
  imports: [
    // The general common module used by the application
    SharedCommonModule,
  ],

  exports: [
  ],

  // Modals used by all should be stored here.
  entryComponents: [],

  providers: [
    // Api services
    AuthService,
    LocationService,

    // Common Services
    AuthTokenService,
    FormErrorService,
    NotifyService,

    // Others
    // Error response sent from the server or any api hits here first
    ErrorInterceptorProvider,

    // Before a call is made to the backend add the authToken to it
    JwtInterceptorProvider,
  ]
})


/**
 * @description Shared module contains all the module only used by all other modules
 */
export class SharedServiceModule { }
