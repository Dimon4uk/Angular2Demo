// library classes
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
// my classes
import { AppComponent } from './app.component';
import { HeaderComponent } from "./component/header";
import { ArticlesComponent } from './component/articles/articles.component';
import { ArticleItemComponent } from './component/articles/list/article-item.component';
import { ArticleListComponent } from './component/articles/list/article-list.component';
import { ArticleDetailComponent } from './component/articles/detail/article-detail.component';
import { DropdownDirective } from './component/header/dropdown.directive';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import {routing} from "./route/app.router";
import { ContactComponent } from './component/contact/contact.component';
import { AccountComponent } from './component/account/account.component';
import { UsersComponent } from './component/users/users.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

let localStorageServiceConfig = {
  prefix: 'app-root',
  storageType: 'sessionStorage'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    DropdownDirective,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:  "AIzaSyB39BY3KeemTWiMWA3tTY0P8hhLIFY9DGM"
    }),
    routing
  ],
  providers: [
    LocalStorageService,
    {
      provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
