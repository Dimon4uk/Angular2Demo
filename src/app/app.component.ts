import { Component } from '@angular/core';

import { HeaderComponent } from "./component/header/header.component";
import {DataService} from "./service/data.service";
import {AuthService} from "./service/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  viewProviders: [HeaderComponent ],
  providers: [DataService, AuthService]
})
export class AppComponent {

}
