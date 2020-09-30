import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinosComponent } from '../admin/destinos/destinos.component';
import { ViajesComponent } from '../admin/viajes/viajes.component';
import { AdminComponent } from './admin/admin.component';
import { DestinoCreateComponent } from './destino-create/destino-create.component';
import { DestinoEditComponent } from './destino-edit/destino-edit.component';


const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'destinos',
        component:DestinosComponent
      },
      {
        path:'destinos/edit/:id',
        component: DestinoEditComponent
      },
      {
        path:'destinos/create',
        component: DestinoCreateComponent
      },
      {
        path:'viajes',
        component:ViajesComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
