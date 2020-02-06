import { NgModule } from '@angular/core';
import { PrivateLayoutsContentComponent } from '../layouts/private-layouts-content/private-layouts-content.component';
import { PrivateLayoutsFullComponent } from '../layouts/private-layouts-full/private-layouts-full.component';
import { PrivatePostsComponent } from '../pages/private-posts/private-posts.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({

  // Decalre compoments
  declarations: [
    PrivateLayoutsContentComponent,
    PrivateLayoutsFullComponent,
    PrivatePostsComponent,
  ],

  imports: [
    SharedModule
  ],

  // Export components to be used by all modules and components of the private section
  exports: [
    PrivateLayoutsContentComponent,
    PrivateLayoutsFullComponent,
    PrivatePostsComponent,
  ]
})

/**
 * @description This contains components that are used only within the private section
 */
export class PrivateComponentsModule { }
