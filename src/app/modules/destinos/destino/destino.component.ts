import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Destino } from '../../core/interface/destino'

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  @Input() destino: Destino;
  
  
  constructor() { }

  ngOnInit(): void {
  }


}
