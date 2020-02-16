import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from './modules/shared-modules/shared-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgMaterialModule } from './modules/vendors/ng-material.module';
import { AuthService } from './services/api/auth/auth.service';
import { LocationService } from './services/api/location/location.service';
import { AuthTokenService } from './services/common/auth-token/auth-token.service';
import { FormErrorService } from './services/common/form-error/form-error.service';
import { NotifyService } from './services/common/notify/notify.service';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { JwtInterceptorProvider } from './interceptors/jwt.interceptor';
import { SharedCommonModule } from './modules/shared-modules/shared-common.module';
import { SharedServiceModule } from './modules/shared-modules/shared-services.module';
import { NgIconsModule } from './modules/vendors/ng-icons.module';

@NgModule({
  declarations: [],
  imports: [
    // The general common module used by the application
    SharedCommonModule,

    // The shared module tha contains all the services
    SharedServiceModule,

    // All shared components should be stored here
    SharedComponentsModule,

    // Angular material module
    NgMaterialModule,

    // Import all the icons to be used by the application
    NgIconsModule,
  ],

  exports: [
    SharedServiceModule,
    SharedCommonModule,
    SharedComponentsModule,
    SharedComponentsModule,
    NgMaterialModule
  ],

  // Modals used by all should be stored here.
  entryComponents: [],

  providers: [
  ]
})


/**
 * @description Shared module contains all the module only used by all other modules
 */
export class SharedModule { }
