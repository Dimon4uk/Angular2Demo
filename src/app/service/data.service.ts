import {Injectable} from "@angular/core";
import {Recipe} from "../model/recipe";
import {Http, Response, Headers, ResponseType} from "@angular/http";

@Injectable()
export class DataService{
  headers:Headers = new Headers();
  private baseURL: string = "http://localhost:8080";


  constructor(private http: Http ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

  }

  private recipes: Recipe[] = [
    new Recipe("Test", "test", "https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-.jpg"),
    new Recipe("Test2", "test2", "https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-.jpg")
  ];

  getRecipes() {
    return this.recipes;
  }

  AddRecipe(newRecipes:Recipe[]) {
    Array.prototype.push.apply(this.recipes, newRecipes);
  }

  getUsers() {

    return this.http.get( this.baseURL + "/users", {withCredentials: false, headers: this.headers});

  }
}

