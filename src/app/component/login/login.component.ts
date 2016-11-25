import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  title = "Sign In";
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
        "username": ["",
          [
            Validators.required
           // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]
        ],
        "password": ["", Validators.required]

      })
  }

  ngOnInit() {
  }

  logIn() {
    if(this.loginForm.valid){
      this.authService.logIn(this.loginForm.value);
      // this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password);
    }

  }

}
