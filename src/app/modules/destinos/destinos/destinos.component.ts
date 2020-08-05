import { Component, OnInit } from '@angular/core';
import {Destino} from '../../core/interface/destino'
 
@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss']
})
export class DestinosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  destinos: Destino[] = [
    
    {
      id: 1,
      nombre: 'Trujillo',
      descripcion: 'Tierra de sicarios',
      imagen: 'https://turismo.org.pe/wp-content/uploads/2018/12/trujillo.jpg',
      precio: 123,
    },
    
    {
      id: 2,
      nombre: 'Cuzco',
      descripcion: 'El ombligo del mundo xd',
      imagen:'https://cdn.getyourguide.com/img/tour/5d186c3f36cbf.jpeg/146.jpg',
      precio: 299.99,
      
    },

  ];

  clickProduct(id: number){
    console.log('product');
    console.log(id);
    
  }

}
