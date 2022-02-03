import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationFormPageRoutingModule } from './reservation-form-routing.module';

import { ReservationFormPage } from './reservation-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationFormPageRoutingModule
  ],
  declarations: [ReservationFormPage]
})
export class ReservationFormPageModule {}
