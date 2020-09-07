import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user/user.service';
import { UsuariosService } from '../../core/service/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../core/interface/usuario';

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
    // event.preventDefault();
    const user = this.form.value
    this.usuariosService.loginUsuario(user)
      .subscribe(response => {
        console.log(response);
        this.usuariosService.getAllUsuarios().subscribe(usuarios=>{
          this.usuario = usuarios.filter(el => { return (el.username === user.username)})[0]
          this.userService.user = this.usuario
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

}
