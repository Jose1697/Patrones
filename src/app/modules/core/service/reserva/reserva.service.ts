import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Reserva} from '../../interface/reserva'


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url_api = 'https://travelsublimes.herokuapp.com/reserva'

  constructor(private http: HttpClient) { }

  getAllReserva(){
    return this.http.get<Reserva[]>(this.url_api)
  }

  getReserva(id: string){
    return this.http.get<Reserva>(`${this.url_api}/${id}`)
  }

  createReserva(reserva: Reserva){
    return this.http.post(this.url_api, reserva)
  }

  updateReserva(id:string, changes: Partial<Reserva>){
    return this.http.put(`${this.url_api}/${id}`, changes)
  }

  deleteReserva(id: string){
    return this.http.delete(`${this.url_api}/${id}`)
  }
}
