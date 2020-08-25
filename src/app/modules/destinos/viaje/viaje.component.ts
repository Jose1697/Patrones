import { Component, OnInit, Input } from '@angular/core';
import { Viaje } from '../../core/interface/viaje'
@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})
export class ViajeComponent implements OnInit {

 @Input() viaje: Viaje

  constructor() { }

  ngOnInit(): void {
  }

}
