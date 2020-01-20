import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacePage } from './informace.page';

const routes: Routes = [
  {
    path: '',
    component: InformacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacePageRoutingModule {}
