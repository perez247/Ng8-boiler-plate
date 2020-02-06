import { NgModule } from '@angular/core';
import { AdminLayoutsContentComponent } from '../layouts/admin-layouts-content/admin-layouts-content.component';
import { AdminLayoutsFullComponent } from '../layouts/admin-layouts-full/admin-layouts-full.component';
import { AdminDashboardComponent } from '../pages/admin-dashboard/admin-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({

  // Decalre compoments
  declarations: [
    AdminLayoutsContentComponent,
    AdminLayoutsFullComponent,
    AdminDashboardComponent,
  ],

  // Import modules to be used in the section
  imports: [
    SharedModule
  ],

  // Export components to be used by all modules and components of the private section
  exports: [
    AdminLayoutsContentComponent,
    AdminLayoutsFullComponent,
    AdminDashboardComponent
  ]
})

/**
 * @description This contains components that are used only within the private section
 */
export class AdminComponentsModule { }
