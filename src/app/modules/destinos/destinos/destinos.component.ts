import { Component, OnInit } from '@angular/core';
import {Destino} from '../../core/interface/destino';
import { DestinosService } from '../../core/service/destinos/destinos.service';
 
@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss']
})
export class DestinosComponent implements OnInit {

  constructor(private destinoService: DestinosService) { }

  ngOnInit(): void {
    this.fetchDestinos();
  }

  destinos: Destino[] = [];

  fetchDestinos(){
    this.destinoService.getAllDestinos()
      .subscribe(destinos => {
        this.destinos = destinos
        console.log('hola');
        
      })

  }

  

}
