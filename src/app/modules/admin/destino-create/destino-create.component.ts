import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { MyValidators } from '../../../utils/validators'
import { AngularFireStorage } from '@angular/fire/storage'
import { DestinosService } from '../../core/service/destinos/destinos.service'
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destino-create',
  templateUrl: './destino-create.component.html',
  styleUrls: ['./destino-create.component.scss']
})
export class DestinoCreateComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>


  constructor(
    private formBuilder: FormBuilder,
    private destinoService: DestinosService,
    private router: Router,
    private storage: AngularFireStorage
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  saveDestino(event: Event){
    event.preventDefault(); //Para que evite recargar. Evita su comportamiento por defecto
    if(this.form.valid){
      const destino = this.form.value
      console.log(destino)
      this.destinoService.createDestino(destino)
        .subscribe((newdestino) =>{
          console.log(newdestino);
          this.router.navigate(['./admin/destinos'])
        })
    }
    
  }

  uploadFile(event){
    const file = event.target.files[0]
    console.log(file);
    
    const name = file.name
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);


    task.snapshotChanges() //Nos va a permitir saber cuando finalizo o no de subir el archivo
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL()
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get('imagen').setValue(url)
          })
        })
      )
      .subscribe();
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({  //creamos un grupo de Formcontrols basado en uN JSON
      iddestino: ['',[Validators.required]],
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
