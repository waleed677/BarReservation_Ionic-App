import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarsListPageRoutingModule } from './bars-list-routing.module';

import { BarsListPage } from './bars-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarsListPageRoutingModule
  ],
  declarations: [BarsListPage]
})
export class BarsListPageModule {}
