import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accumulate' },
  {
    path: 'accumulate',
    loadChildren: async () =>
      (await import('./domain/accumulate/accumulate.router')).ACCUMULATE_ROUTES,
  },
  {
    path: 'auth',
    loadChildren: async () =>
      (await import('./domain/auth/auth.router')).AUTH_ROUTES,
  },
  {
    path: '**',
    redirectTo: '/accumulate',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
