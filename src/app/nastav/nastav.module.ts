import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NastavPageRoutingModule } from './nastav-routing.module';

import { NastavPage } from './nastav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NastavPageRoutingModule
  ],
  declarations: [NastavPage]
})
export class NastavPageModule {}
