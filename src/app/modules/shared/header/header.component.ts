import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../../core/interface/cliente';
import { Usuario } from '../../core/interface/usuario';
import { ClienteService } from '../../core/service/cliente/cliente.service';
import { UserService } from '../../core/service/user/user.service';
import { AngularFireStorage } from '@angular/fire/storage'
import { finalize } from 'rxjs/operators'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form:FormGroup
  image$: Observable<any>
  cliente: Cliente
  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private storage: AngularFireStorage
    
    ) { 
      this.buildForm()
      
    }

  ngOnInit(): void {
    this.BuscarCliente(this.userService.user)
  }

  saveUsername(event: Event){
    event.preventDefault(); //Para que evite recargar. Evita su comportamiento por defecto
    if(this.form.valid){
      const cliente = {
        idcliente: this.cliente.idcliente,
        usuario:this.userService.user.id,
        imagen:this.form.value.imagen
      }
      
      this.clienteService.updateCliente(this.cliente.idcliente, cliente)
        .subscribe((newcliente) =>{
          console.log(newcliente);
          alert('El cambio se realizó')
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
      imagen: ['',[Validators.required]],
    })
  }

  private BuscarCliente(usuario:Usuario){
    this.clienteService.getAllCliente()
    .subscribe(clientes => {
      this.userService.cliente = clientes.filter(el => { return (el.usuario === this.userService.user.id)})[0]
      this.cliente = this.userService.cliente
      console.log(this.cliente);
    })

  }

  

}
