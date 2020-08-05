import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { DestinoComponent } from './destino/destino.component';
import { DestinosComponent } from './destinos/destinos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DestinoComponent, 
    DestinosComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    SharedModule,
  ]
})
export class DestinosModule { }
