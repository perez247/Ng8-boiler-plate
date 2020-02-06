import { NgModule } from '@angular/core';
import { PublicLayoutsContentComponent } from '../layouts/public-layouts-content/public-layouts-content.component';
import { PublicLayoutsFullComponent } from '../layouts/public-layouts-full/public-layouts-full.component';
import { PublicHomeComponent } from '../pages/public-home/public-home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({

  // Decalre compoments
  declarations: [
    PublicLayoutsContentComponent,
    PublicLayoutsFullComponent,
    PublicHomeComponent,
  ],
  imports: [
    SharedModule,
  ],

  // Export components to be used by all modules and components of the private section
  exports: [
    PublicLayoutsContentComponent,
    PublicLayoutsFullComponent,
    PublicHomeComponent
  ],
})

/**
 * @description This contains components that are used only within the public section
 */
export class PublicComponentsModule { }
