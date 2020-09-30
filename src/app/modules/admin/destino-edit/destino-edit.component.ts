import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { MyValidators } from '../../../utils/validators'

import { DestinosService } from '../../core/service/destinos/destinos.service'

@Component({
  selector: 'app-destino-edit',
  templateUrl: './destino-edit.component.html',
  styleUrls: ['./destino-edit.component.scss']
})
export class DestinoEditComponent implements OnInit {

  form: FormGroup
  id:string

  constructor(
    private formBuilder: FormBuilder,
    private destinoService: DestinosService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.destinoService.getDestino(this.id)
        .subscribe( destino => {
          this.form.patchValue(destino)
        })
    })
  }

  saveDestino(event: Event){
    event.preventDefault(); //Para que evite recargar. Evita su comportamiento por defecto
    if(this.form.valid){
      const destino = this.form.value
      this.destinoService.updateDestino(this.id, destino)
        .subscribe((newdestino) =>{
          console.log(newdestino);
          this.router.navigate(['./admin/destinos'])
        })
    }
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({  //creamos un grupo de Formcontrols basado en uN JSON
      nombre: ['',[Validators.required]],
      precio: ['',[Validators.required,MyValidators.isPriceValid]],
      imagen: [''],
      descripcion: ['',[Validators.required]],
    })
  }

  get priceField(){
    return this.form.get('precio')
  }

}
