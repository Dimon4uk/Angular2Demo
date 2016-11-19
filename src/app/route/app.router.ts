import {provideRoutes, RouterModule} from "@angular/router";
import {RecipesComponent} from "../component/recipes/recipes.component";
import {HomeComponent} from "../component/home/home.component";
import {AboutComponent} from "../component/about/about.component";
import {ContactComponent} from "../component/contact/contact.component";
import {AccountComponent} from "../component/account/account.component";
import {UsersComponent} from "../component/users/users.component";


export const APP_ROUTES_PROVIDERS =[
   // provideRoutes([
    {path: '', component: HomeComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'about', component: AboutComponent  },
    {path: 'contact', component: ContactComponent },
    {path: 'users', component: UsersComponent },
    {path: 'account', component: AccountComponent }

   // ])
];

export const  routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
