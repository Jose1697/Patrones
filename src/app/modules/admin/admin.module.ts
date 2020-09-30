import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DestinosComponent } from './destinos/destinos.component';
import { DestinoEditComponent } from './destino-edit/destino-edit.component';
import { DestinoCreateComponent } from './destino-create/destino-create.component';
import { ViajesComponent } from './viajes/viajes.component';


@NgModule({
  declarations: [
    AdminComponent,
    DestinosComponent,
    DestinoEditComponent,
    DestinoCreateComponent,
    ViajesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  
  ]
})
export class AdminModule { }
