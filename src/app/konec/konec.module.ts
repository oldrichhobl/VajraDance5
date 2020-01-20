import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonecPageRoutingModule } from './konec-routing.module';

import { KonecPage } from './konec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonecPageRoutingModule
  ],
  declarations: [KonecPage]
})
export class KonecPageModule {}
