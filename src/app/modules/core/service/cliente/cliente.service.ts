import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Cliente} from '../../interface/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url_api = 'https://travelsublimes.herokuapp.com/cliente'

  constructor(private http: HttpClient) { }

  getAllCliente(){
    return this.http.get<Cliente[]>(this.url_api)
  }

  getCliente(id: string){
    return this.http.get<Cliente>(`${this.url_api}/${id}`)
  }

  createCliente(cliente: Cliente){
    return this.http.post(this.url_api, cliente)
  }

  updateCliente(id:string, changes: Partial<Cliente>){
    return this.http.put(`${this.url_api}/${id}`, changes)
  }

  deleteCliente(id: string){
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
