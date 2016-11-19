import { Component, OnInit } from '@angular/core';
import {DropdownDirective} from "./dropdown.directive";



@Component({

  selector: "app-header",
  templateUrl: "./header.component.html",
  viewProviders: [DropdownDirective]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Angular 2 Demo";
}
