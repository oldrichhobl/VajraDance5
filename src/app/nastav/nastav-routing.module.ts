import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NastavPage } from './nastav.page';

const routes: Routes = [
  {
    path: '',
    component: NastavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NastavPageRoutingModule {}
