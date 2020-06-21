import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event){

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required] ],
      passwordConfirm: ['', [Validators.required]]
    });
  }

}
