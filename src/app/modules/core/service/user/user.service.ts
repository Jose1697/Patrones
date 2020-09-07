import { Injectable } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { BehaviorSubject } from 'rxjs';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user  = {} as Usuario
  
  constructor(
    
  ) {
    this.obtener_localStorage()
   }

  grabar_localStorage(usuario:Usuario){
    localStorage.setItem("usuario",JSON.stringify(usuario))
  }

  obtener_localStorage(){
    this.user = JSON.parse(localStorage.getItem("usuario"))
    if(this.user === null){
      this.user = {} as Usuario
    }
  }

  borrar_localStorage(){
    localStorage.removeItem("usuario")
  }

  // setUser(usuario: Usuario){
  //   this.user = usuario
  //   this.cont.next(this.user)
  // }
}
