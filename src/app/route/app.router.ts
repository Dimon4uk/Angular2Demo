import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../component/recipes/recipes.component";
import {HomeComponent} from "../component/home/home.component";
import {AboutComponent} from "../component/about/about.component";
import {ContactComponent} from "../component/contact/contact.component";
import {AccountComponent} from "../component/account/account.component";
import {UsersComponent} from "../component/users/users.component";
import {ModuleWithProviders} from "@angular/core";


export const APP_ROUTES_PROVIDERS: Routes =[

    {path: '', component: HomeComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'about', component: AboutComponent  },
    {path: 'contact', component: ContactComponent },
    {path: 'users', component: UsersComponent },
    {path: 'account', component: AccountComponent }


];

export const  routing: ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
