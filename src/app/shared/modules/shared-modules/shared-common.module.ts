import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotDetectCaptchaModule } from 'angular-captcha';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BotDetectCaptchaModule.forRoot({
      captchaEndpoint: `/api/simple-captcha-endpoint.ashx`
  }),
  ],

  exports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BotDetectCaptchaModule
  ],

  // Modals used by all should be stored here.
  entryComponents: [],

  providers: []
})


/**
 * @description Shared module contains all the module only used by all other modules
 */
export class SharedCommonModule { }
