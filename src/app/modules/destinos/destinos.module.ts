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
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';





@NgModule({
  declarations: [
    DestinoComponent, 
    DestinosComponent, 
    DestinoDetailComponent,
    LugaresComponent,
    LugarComponent,
    ViajeComponent,
    ViajesComponent,
    ComprarComponent,
  ],

  imports: [
    CommonModule,
    DestinosRoutingModule,
    RouterModule,
    SharedModule, 
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DestinosModule { }
