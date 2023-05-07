import { Routes } from '@angular/router';
import { AccumulateComponent } from './accumulate.component';

export const ACCUMULATE_ROUTES: Routes = [
  {
    path: '',
    component: AccumulateComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: async () =>
          (await import('./pages/dashboard/dashboard.component'))
            .DashboardComponent,
      },
      {
        path: 'fixed-expenses',
        loadComponent: async () =>
          (await import('./pages/fixed-expenses/fixed-expenses.component'))
            .FixedExpensesComponent,
      },
      {
        path: 'variable-expenses',
        loadComponent: async () =>
          (
            await import(
              './pages/variable-expenses/variable-expenses.component'
            )
          ).VariableExpensesComponent,
      },
      {
        path: 'my-profile',
        loadComponent: async () =>
          (await import('./pages/my-profile/my-profile.component'))
            .MyProfileComponent,
      },
    ],
  },
];
