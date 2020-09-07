import { Component, OnInit, Input } from '@angular/core';
import { Viaje } from '../../core/interface/viaje'
import { Destino } from '../../core/interface/destino';
import { DestinosService } from '../../core/service/destinos/destinos.service';
@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})
export class ViajeComponent implements OnInit {

 @Input() viaje: Viaje

  destino: Destino

  constructor(private destinoService: DestinosService) { }


  ngOnInit(): void {
    this.destinoService.getDestino(this.viaje.iddestino.toString())
      .subscribe(destino => {
        this.destino = destino
      })
  }



}
