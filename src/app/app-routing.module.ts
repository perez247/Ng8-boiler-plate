import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoute } from './shared/routes/app.routes';
import { SharedNotFoundComponent } from './shared/pages/shared-not-found/shared-not-found.component';
import { PrivateRedirectAuthenticatedUser } from './private/guards/private-redirect-authenticated-user.guard';
import { PrivateOnlyAuthenticatedUserGaurd } from './private/guards/private-only-authenticated-user.guard';
import { SharedLogout } from './shared/guards/shared-logout.guard';

// Get the whole routes of the app
const appRoute = AppRoute.generateRoutes();

const routes: Routes = [

  // When visiting initially direct the users to the public home page
  {
    path: '',
    redirectTo: appRoute.public.$name,
    pathMatch: 'full',
  },

  {
    path: appRoute.public.$name,
    loadChildren: './public/public.module#PublicModule',

    //  check if the user is logged in already, so the user can be redirected into the private page
    canActivate: [PrivateRedirectAuthenticatedUser]
  },

  {
    path: appRoute.private.$name,
    loadChildren: './private/private.module#PrivateModule',

    // Check if the user is logged in before going into the private section
    canActivate: [PrivateOnlyAuthenticatedUserGaurd]
  },

  {
    path: appRoute.admin.$name,
    loadChildren: './admin/admin.module#AdminModule',

    // Check if the user has admin privilege before going into the admin section
    canActivate: []
  },

  {
    path: appRoute.logout,
    component: SharedNotFoundComponent,

    // Just log the user out and redirect to home page
    canActivate: [SharedLogout]
  },

  // If no url matched then show page not found
  {
    path: '**',
    component: SharedNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
