import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Lugar} from '../../interface/lugar'

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  url_api = 'https://travelsublimes.herokuapp.com/lugar'

  constructor(private http: HttpClient) { }

  getAllLugares(){
    return this.http.get<Lugar[]>(this.url_api)
  }

  getLugar(id: string){
    return this.http.get<Lugar>(`${this.url_api}/${id}`)
  }

  createLugar(lugar: Lugar){
    return this.http.post(this.url_api, lugar)
  }

  updateLugar(id:string, changes: Partial<Lugar>){
    return this.http.put(`${this.url_api}/${id}`, changes)
  }

  deleteDestino(id: string){
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
