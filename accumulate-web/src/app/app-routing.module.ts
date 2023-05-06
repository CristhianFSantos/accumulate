import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'fixed-expenses',
    loadComponent: () =>
      import('./pages/fixed-expenses/fixed-expenses.component').then(
        (m) => m.FixedExpensesComponent
      ),
  },
  {
    path: 'variable-expenses',
    loadComponent: () =>
      import('./pages/variable-expenses/variable-expenses.component').then(
        (m) => m.VariableExpensesComponent
      ),
  },
  {
    path: 'my-profile',
    loadComponent: () =>
      import('./pages/my-profile/my-profile.component').then(
        (m) => m.MyProfileComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
