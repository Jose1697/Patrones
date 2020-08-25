import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajeComponent } from '../destinos/viaje/viaje.component';
import { ViajesComponent } from '../destinos/viajes/viajes.component';


@NgModule({
  declarations: [ViajeComponent, ViajesComponent],
  imports: [
    CommonModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
