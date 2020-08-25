import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { DestinoComponent } from './destino/destino.component';
import { DestinosComponent } from './destinos/destinos.component';
import { SharedModule } from '../shared/shared.module';
import { DestinoDetailComponent } from './destino-detail/destino-detail.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugarComponent } from './lugar/lugar.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ViajesComponent } from './viajes/viajes.component';


@NgModule({
  declarations: [
    DestinoComponent, 
    DestinosComponent, 
    DestinoDetailComponent,
    LugaresComponent,
    LugarComponent,
    ViajeComponent,
    ViajesComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    SharedModule,
  ]
})
export class DestinosModule { }
