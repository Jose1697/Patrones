import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../core/service/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../core/interface/usuario';

import { UserService } from '../../core/service/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  usuario: Usuario;

  login(event: Event){
    event.preventDefault();
    const user = this.form.value
    this.usuariosService.loginUsuario(user)
      .subscribe(response => {
        console.log(response);
        this.usuariosService.getAllUsuarios().subscribe(usuarios=>{
          this.usuario = usuarios.filter(el => { return (el.username === user.username)})[0]
        })
        
        this.router.navigate(['./'])

      });
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  setUser(){
    console.log('usuario log');
    this.userService.setUser(this.usuario)
    // console.log(this.usuario.username);
    
  }

}
