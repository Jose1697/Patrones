import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../interface/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url_api = 'http://localhost:8000/users'

  constructor(private http: HttpClient) { }

  
  getAllUsuarios(){
    return this.http.get<Usuario[]>(this.url_api)
  }

  getUsuario(id: string){
    return this.http.get<Usuario>(`${this.url_api}/${id}`)
  }

  createUsuario(usuario: Usuario){
    return this.http.post(this.url_api, usuario)
  }

  loginUsuario(usuario): Observable<any>{
    return this.http.post('http://localhost:8000/auth/', usuario);
  }

  updateUsuario(id:string, changes: Partial<Usuario>){
    return this.http.put(`${this.url_api}/${id}`, changes)
  }

  deleteUsuario(id: string){
    return this.http.delete(`${this.url_api}/${id}`)
  }

  

}
