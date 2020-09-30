import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
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
    path:'boletos/:id',
    component: ViajesComponent
  },
  {
    path:'boletos/:id/comprar/:idb',
    component: ComprarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
