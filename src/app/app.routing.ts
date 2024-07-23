import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';



export const AppRoutes: Routes = [
  { path: 'login',component:LoginComponent },
  {
    path: 'user',
    component: UserLayoutComponent,
    // canActivate:([AuthGuard]),
    children: [
        {
      path: '',
      loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
  }]},
  {
    path: '',
    redirectTo: '/analytics',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    // canActivate:([AuthGuard]),
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
