import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';


const routes: Routes = [
  {
    path:'',
    component:DestinosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
