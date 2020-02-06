import { AppRoute } from '../shared/routes/app.routes';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutsContentComponent } from './layouts/admin-layouts-content/admin-layouts-content.component';
import { AdminLayoutsFullComponent } from './layouts/admin-layouts-full/admin-layouts-full.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


// Get all the routes for the application
const appRoute = AppRoute.generateRoutes();

const routes: Routes = [

  // If no route is given then use default route
  {
    path: '',
    redirectTo: appRoute.admin.dashboard().$name,
    pathMatch: 'full'
  },

  // Select the path to put the pages---------------------------------------------

  // Content Layout component-------------------------------

  {
    path: '',
    component: AdminLayoutsContentComponent,
    children: [

      // Add components here
    ]
  },

  // Full layout component-----------------------------------
  {
    path: '',
    component: AdminLayoutsFullComponent,
    children: [

      // For the dashboard page (default)
      {
        path: appRoute.admin.dashboard().$name,
        component: AdminDashboardComponent,
      }

      // Add more components here
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

