import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentviewComponent } from './documentview.component';

export const routes: Routes = [
  {
    path: '',
    component: DocumentviewComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DocumentviewModule { }
