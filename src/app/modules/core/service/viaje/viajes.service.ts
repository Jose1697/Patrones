import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../../interface/viaje'


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  url_api = 'http://localhost:8000/viaje'

  constructor(private http: HttpClient) { }

  getAllViaje(){
    return this.http.get<Viaje[]>(this.url_api)
  }

  getViaje(id: string){
    return this.http.get<Viaje>(`${this.url_api}/${id}`)
  }

  createViaje(viaje: Viaje){
    return this.http.post(this.url_api, viaje)
  }

  updateViaje(id:string, changes: Partial<Viaje>){
    return this.http.put(`${this.url_api}/${id}`, changes)
  }

  deleteViaje(id: string){
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
