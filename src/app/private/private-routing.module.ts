import { AppRoute } from '../shared/routes/app.routes';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateLayoutsContentComponent } from './layouts/private-layouts-content/private-layouts-content.component';
import { PrivateLayoutsFullComponent } from './layouts/private-layouts-full/private-layouts-full.component';
import { PrivatePostsComponent } from './pages/private-posts/private-posts.component';


// Get all the routes for the application
const appRoute = AppRoute.generateRoutes();

const routes: Routes = [

  // If no route is given then use default route
  {
    path: '',
    // This points to the home page to show personal posts
    redirectTo: appRoute.private.home.posts('user').$name,
    pathMatch: 'full'
  },

  // Select the path to put the pages---------------------------------------------

  // Content Layout component-------------------------------

  {
    path: '',
    component: PrivateLayoutsContentComponent,
    children: [

      // Add components here
    ]
  },

  // Full layout component-----------------------------------
  {
    path: '',
    component: PrivateLayoutsFullComponent,
    children: [

      // For the post page (default)
      {
        path: appRoute.private.home.posts().$name,
        component: PrivatePostsComponent
      }

      // Add more components here
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }

