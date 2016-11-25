import { Component, OnInit } from '@angular/core';
import {DropdownDirective} from "./dropdown.directive";
import {AuthService} from "../../service/auth.service";



@Component({

  selector: "app-header",
  templateUrl: "./header.component.html",
  viewProviders: [DropdownDirective]
})
export class HeaderComponent implements OnInit {
  title = "Angular 2 Demo";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }



  isLogged(){
    return this.authService.isLogged();
  }

  logOut() {
    this.authService.logOut();
  }
}
