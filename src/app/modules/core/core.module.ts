import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosService } from './service/destinos/destinos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    DestinosService
  ]
})
export class CoreModule { }
