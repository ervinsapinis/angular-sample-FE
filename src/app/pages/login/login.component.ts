import { LoginService } from './../../shared/services/login.services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required, Validators.min(3)]],
      password: ['',[Validators.required]],
    })
  }

  login(): void {
    if(this.loginForm.invalid){
        return;
      }

      this.loginService.login(this.loginForm.value)
  }
}
