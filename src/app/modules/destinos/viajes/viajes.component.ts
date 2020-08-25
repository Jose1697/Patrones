import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../core/service/viaje/viajes.service';
import { Viaje } from '../../core/interface/viaje';
import { ActivatedRoute, Params } from '@angular/router';
import { DestinosService } from '../../core/service/destinos/destinos.service';
import { Destino } from '../../core/interface/destino';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private destinoService: DestinosService,
    private viajeService: ViajesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchViajes(id);
    })

  }

  viajes: Viaje[] = [];
  destino: Destino

  fetchViajes(id: string){
    this.viajeService.getAllViaje()
      .subscribe(viajes => {
        this.viajes = viajes.filter(el => { return (el.iddestino === Number(id))})
        this.destinoService.getDestino(id)
          .subscribe(destino => {
            this.destino = destino
          })
        console.log('hola');
      })

  }



}
