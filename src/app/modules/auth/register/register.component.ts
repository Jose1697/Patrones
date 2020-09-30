import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../core/service/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { ClienteService } from '../../core/service/cliente/cliente.service';
import { Cliente } from '../../core/interface/cliente';
import { Usuario } from '../../core/interface/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  public cliente: Cliente;
  public usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private clienteService:ClienteService,
    
  ) { 
    this.buildForm();
  }

  ngOnInit(
    
  ): void {
  }

  register(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const user = this.form.value
      this.usuariosService.createUsuario(user)
        .subscribe(newuser => {
          this.usuario = newuser
          this.cliente = {
            idcliente:"",
            usuario:this.usuario.id,
            imagen:"",
          }
          this.clienteService.createCliente(this.cliente)
           .subscribe((cliente)=>{
              console.log(cliente);   
           })
          alert('Usuario Creado')
          this.router.navigate(['./user/login'])
        }) 
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      first_name: ['',[Validators.required]],
      last_name: ['',[Validators.required]],
      username: ['',[Validators.required]],
      password: ['', [Validators.required] ],
      passwordConfirm: ['', [Validators.required]]
    });
  }

}
