import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', component: NotFoundComponent },
];
