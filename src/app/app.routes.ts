import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../app/pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
