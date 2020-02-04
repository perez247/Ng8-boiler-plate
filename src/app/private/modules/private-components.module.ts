import { NgModule } from '@angular/core';
import { PrivateLayoutsContentComponent } from '../layouts/private-layouts-content/private-layouts-content.component';
import { PrivateLayoutsFullComponent } from '../layouts/private-layouts-full/private-layouts-full.component';
import { PrivatePostsComponent } from '../pages/private-posts/private-posts.component';



@NgModule({

  // Decalre compoments
  declarations: [
    PrivateLayoutsContentComponent,
    PrivateLayoutsFullComponent,
    PrivatePostsComponent,
  ],

  imports: [],

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
