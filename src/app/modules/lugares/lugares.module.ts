import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugarComponent } from './lugar/lugar.component';
import { LugaresComponent } from './lugares/lugares.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LugarComponent, 
    LugaresComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    SharedModule,
  ]
})
export class LugaresModule { }
