import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'admin-users',
        component: AdminUsersComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
