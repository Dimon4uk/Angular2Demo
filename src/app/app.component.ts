import { Component } from '@angular/core';

import { HeaderComponent } from "./component/header/header.component";
import { RecipesComponent } from "./component/recipes/recipes.component"
import {DataService} from "./service/data.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [HeaderComponent, RecipesComponent ],
  providers: [DataService]
})
export class AppComponent {

}
