import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacePageRoutingModule } from './informace-routing.module';

import { InformacePage } from './informace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacePageRoutingModule
  ],
  declarations: [InformacePage]
})
export class InformacePageModule {}
