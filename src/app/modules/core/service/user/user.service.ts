import { Injectable } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { Cliente } from '../../interface/cliente';
import { BehaviorSubject } from 'rxjs';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user  = {} as Usuario
  admin = {} as Usuario
  cliente = {} as Cliente
  
  constructor(
    
  ) {
    this.obtener_localStorage()
   }

  grabar_localStorage(usuario:Usuario){
    if(usuario.is_staff === false){
      localStorage.setItem("usuario",JSON.stringify(usuario))
    }

    if(usuario.is_staff){
      localStorage.setItem("admin",JSON.stringify(usuario))
    }
    
  }

  obtener_localStorage(){
    this.user = JSON.parse(localStorage.getItem("usuario"))
    if(this.user === null){
      this.user = {} as Usuario
    }

    this.admin = JSON.parse(localStorage.getItem("admin"))
    if(this.admin === null){
      this.admin = {} as Usuario
    }
  }

  hasUser(){
    if(this.admin.username == null){
      return false
    }
    else{
      return true
    }
  }

  borrar_localStorage(){
    localStorage.removeItem("usuario")
  }

  borrar_localStorageAdmin(){
    localStorage.removeItem("admin")
  }

  // setUser(usuario: Usuario){
  //   this.user = usuario
  //   this.cont.next(this.user)
  // }
}
