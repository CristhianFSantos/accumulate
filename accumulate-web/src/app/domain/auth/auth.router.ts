import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: async () =>
          (await import('./pages/login/login.component')).LoginComponent,
      },
      {
        path: 'register',
        loadComponent: async () =>
          (await import('./pages/register/register.component'))
            .RegisterComponent,
      },
    ],
  },
];
