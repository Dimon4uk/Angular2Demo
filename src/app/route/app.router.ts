import {RouterModule, Routes} from "@angular/router";
import {ArticlesComponent} from "../component/articles/articles.component";
import {HomeComponent} from "../component/home/home.component";
import {AboutComponent} from "../component/about/about.component";
import {ContactComponent} from "../component/contact/contact.component";
import {AccountComponent} from "../component/account/account.component";
import {UsersComponent} from "../component/users/users.component";
import {ModuleWithProviders} from "@angular/core";
import {RegisterComponent} from "../component/register/register.component";
import {LoginComponent} from "../component/login/login.component";

export const APP_ROUTES_PROVIDERS: Routes =[

    {path: '', redirectTo: '/home', pathMatch : 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'articles', component: ArticlesComponent},
    {path: 'about', component: AboutComponent  },
    {path: 'contact', component: ContactComponent },
    {path: 'users', component: UsersComponent },
    {path: 'account', component: AccountComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent }

];
export const  routing: ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
