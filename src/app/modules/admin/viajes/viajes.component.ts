import { Component, OnInit } from '@angular/core';
import { Destino } from '../../core/interface/destino';
import { Reserva } from '../../core/interface/reserva';
import { Viaje } from '../../core/interface/viaje';
import { DestinosService } from '../../core/service/destinos/destinos.service';
import { ReservaService } from '../../core/service/reserva/reserva.service';
import { ViajesService } from '../../core/service/viaje/viajes.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {

  displayedColumns: string[] = ['id','destino','fecha','hora','disponibilidad']
  viajes: Viaje[] =[]
  destino:Destino
  constructor(
    private destinoService: DestinosService,
    private viajeService: ViajesService) { 

    }

  ngOnInit(): void {
    this.fetchViaje();
     
  }

  destinos: Destino[] = [];

  conseguirDestino(id:string){
    console.log(id)
    
    console.log(this.destinoService.destinos.filter(el => { return  (el.iddestino === id)}));
      
    return this.destinoService.destinos.filter(el => { return  (el.iddestino === id)})[0].nombre
    
  }

  fetchViaje(){
    this.viajeService.getAllViaje()
      .subscribe(viajes => {
        this.viajes = viajes
      })
  }

  deleteViaje(idviaje){

  }

  

}
