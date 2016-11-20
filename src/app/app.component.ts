import { Component } from '@angular/core';

import { HeaderComponent } from "./component/header/header.component";
import {DataService} from "./service/data.service";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  viewProviders: [HeaderComponent ],
  providers: [DataService]
})
export class AppComponent {

}
