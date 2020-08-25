import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ViajesComponent } from './viajes/viajes.component';


const routes: Routes = [
  {
    path:'',
    component:DestinosComponent
  },
  {
    path: ':id',
    component: LugaresComponent
  },
  {
    path:'comprar/:id',
    component: ViajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
