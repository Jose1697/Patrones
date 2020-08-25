import { Component, OnInit, Input } from '@angular/core';
import { Lugar } from '../../core/interface/lugar';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss']
})
export class LugarComponent implements OnInit {

  @Input() lugar: Lugar;

  constructor() { }

  ngOnInit(): void {
  }

}
