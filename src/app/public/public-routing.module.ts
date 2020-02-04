import { AppRoute } from '../shared/routes/app.routes';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutsFullComponent } from './layouts/public-layouts-full/public-layouts-full.component';
import { PublicLayoutsContentComponent } from './layouts/public-layouts-content/public-layouts-content.component';
import { PublicHomeComponent } from './pages/public-home/public-home.component';
import { NgModule } from '@angular/core';


// Get all the routes for the application
const appRoute = AppRoute.generateRoutes();

const routes: Routes = [

  // If no route is given then use default route
  {
    path: '',
    redirectTo: appRoute.public.home().$name,
    pathMatch: 'full'
  },

  // Select the path to put the pages---------------------------------------------

  // Content Layout component-------------------------------

  {
    path: '',
    component: PublicLayoutsContentComponent,
    children: [

      // For the home page
      {
        path: appRoute.public.home().$name,
        component: PublicHomeComponent
      }

      // Add more components here
    ]
  },

  // Full layout component-----------------------------------
  {
    path: '',
    component: PublicLayoutsFullComponent,
    children: [
      // Add components here
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }

