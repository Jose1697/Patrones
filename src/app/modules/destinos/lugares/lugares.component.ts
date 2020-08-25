import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../core/service/lugares/lugares.service';
import { Lugar } from '../../core/interface/lugar';
import { ActivatedRoute, Params } from '@angular/router';
import { DestinosService } from '../../core/service/destinos/destinos.service';
import {Destino} from '../../core/interface/destino';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private lugarService: LugaresService,
    private destinoService: DestinosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
       const id = params.id;
       this.fetchLugares(id);
    });
    
  }
  
  lugares: Lugar[] = [];
  destino: Destino
  
  fetchLugares(id: string){
    this.lugarService.getAllLugares()
      .subscribe(lugares => {
        this.lugares = lugares.filter(el => { return (el.iddestino === Number(id))})
      this.destinoService.getDestino(id)
          .subscribe(destino => {
            this.destino = destino
          })
        
          
        console.log('hola');
        
    })
    console.log(this.destino);

  }

}
