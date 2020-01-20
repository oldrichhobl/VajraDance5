import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandalaPage } from './mandala.page';

const routes: Routes = [
  {
    path: '',
    component: MandalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandalaPageRoutingModule {}
