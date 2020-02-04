import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from './modules/shared-components.module';
import { SharedNotFoundComponent } from './pages/shared-not-found/shared-not-found.component';

@NgModule({
  declarations: [SharedNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // All shared components should be stored here
    SharedComponentsModule,
  ],

  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule
  ],

    // Modals used by all should be stored here.
    entryComponents: []
})


/**
 * @description Shared module contains all the module only used by all other modules
 */
export class SharedModule { }
