import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthadminRoutingModule } from './authadmin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthadminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule 
  ]
})
export class AuthadminModule { }
