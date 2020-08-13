import { Injectable } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Usuario = null;
  private cont = new BehaviorSubject<Usuario>(null)

  // cont$ = this.cont.asObservable()
  // constructor() { }

  // setUser(usuario: Usuario){
  //   this.user = usuario
  //   this.cont.next(this.user)
  // }
}
