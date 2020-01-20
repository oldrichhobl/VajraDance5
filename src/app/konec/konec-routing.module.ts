import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonecPage } from './konec.page';

const routes: Routes = [
  {
    path: '',
    component: KonecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonecPageRoutingModule {}
