// library classes
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// my classes
import { AppComponent } from './app.component';
import { HeaderComponent } from "./component/header";
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeItemComponent } from './component/recipes/list/recipe-item.component';
import { RecipeListComponent } from './component/recipes/list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipes/detail/recipe-detail.component';
import { DropdownDirective } from './component/header/dropdown.directive';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import {routing} from "./route/app.router";
import { ContactComponent } from './component/contact/contact.component';
import { AccountComponent } from './component/account/account.component';
import { UsersComponent } from './component/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    DropdownDirective,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
