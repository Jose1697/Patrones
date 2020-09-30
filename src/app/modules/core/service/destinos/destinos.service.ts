import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Destino} from '../../interface/destino'
@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  destinos: Destino[] = [] 

  url_api = 'https://travelsublimes.herokuapp.com/destino'

  constructor(private http: HttpClient) { }

  getAllDestinos(){
    return this.http.get<Destino[]>(this.url_api)
  }

  getDestino(id: string){
    return this.http.get<Destino>(`${this.url_api}/${id}`)
  }

  createDestino(destino: Destino){
    return this.http.post(this.url_api, destino)
  }

  updateDestino(id:string, changes: Partial<Destino>){
    return this.http.put(`${this.url_api}/${id}`, changes)
  }

  deleteDestino(id: string){
    return this.http.delete(`${this.url_api}/${id}`)
  }

}
