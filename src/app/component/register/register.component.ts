import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import {DataService} from "../../service/data.service";
import {Observable} from "rxjs";
import {User} from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ["register.component.css"],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {
  title = "Please Sign Up";
  registerForm: FormGroup;
  genders = [ 'Male', 'Female'];
  private user: User;

  constructor(private dataService: DataService) {

      this.registerForm = new FormGroup({
          "firstName": new FormControl("", Validators.required),
          "lastName": new FormControl("", Validators.required),
          "displayName": new FormControl("", Validators.required),
          "username": new FormControl("", [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]
          ),
          "dateOfBirth": new FormControl(""),
          "gender": new FormControl("Male"),
          "phoneNumber": new FormControl(""),
          "password": new FormControl("", [Validators.required]),
          "passwordConfirmation": new FormControl("", [Validators.required]),
           "isAgree": new FormControl()
      });

    // this.registerForm.valueChanges.subscribe(
    //
    //   (data: any) => console.log(data)
    // );

  }


  onSubmit() {
     this.user = new User(
      this.registerForm.value.displayName,
      this.registerForm.value.username,
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.phoneNumber,
    );

     this.dataService.registerUser(this.user);
    // this.registerForm.reset();
  }

  ngOnInit() {
  }

}
