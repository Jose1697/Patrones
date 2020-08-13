import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../core/service/usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const user = this.form.value
      this.usuariosService.createUsuario(user)
        .subscribe((newuser) => {
          console.log(newuser);
          alert('Usuario Creado')
          this.router.navigate(['./auth/login'])
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
