import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandalaPageRoutingModule } from './mandala-routing.module';

import { MandalaPage } from './mandala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandalaPageRoutingModule
  ],
  declarations: [MandalaPage]
})
export class MandalaPageModule {}
