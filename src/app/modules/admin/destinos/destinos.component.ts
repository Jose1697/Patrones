import { Component, OnInit } from '@angular/core';
import {DestinosService} from '../../core/service/destinos/destinos.service'
import {Destino} from '../../core/interface/destino'
import { ReservaService } from '../../core/service/reserva/reserva.service';
import { Reserva } from '../../core/interface/reserva';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss']
})
export class DestinosComponent implements OnInit {

  destinos: Destino[] = [];
  displayedColumns: string[] = ['id','nombre','precio','actions']
  

  constructor(
    private destinoService: DestinosService,
    ) { }

  ngOnInit(): void {
    this.fetchDestinos()
  }

  fetchDestinos(){
    this.destinoService.getAllDestinos()
      .subscribe(destino =>{
        this.destinos = destino
        this.destinoService.destinos = destino
      })
  }

  deleteDestino(id:string){
    this.destinoService.deleteDestino(id)
      .subscribe(rta => {
        this.fetchDestinos()
      })
  }

  

}
