import {Injectable} from "@angular/core";
import {Article} from "../model/article";
import {Http, Response, Headers, ResponseType} from "@angular/http";
import {User} from "../model/user";

@Injectable()
export class DataService{
  headers:Headers = new Headers();
  private apiURL: string = "http://localhost:8080";

  private users: User[] = [
    new User('admin', 'admin@admin.com', 'admin', 'admin',  '093 1234567'),
    new User('admin2', 'admin2@admin.com', 'admin2', 'admin2',  '093 2134567')
  ];

  constructor(private http: Http ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

  }

  getArticles() {
    return null;
    // this.http.get(
    //         this.apiURL + "/articles/",
    //         {withCredentials: false, headers: this.headers}
    //       );
  }

  registerUser(user: User) {
    console.log(user);
    // Array.prototype.concat(this.users, user).apply();
    console.log(this.users);
  }

  AddArticle(newArticles:Article[]) {
    //Array.prototype.push.apply(this.articles, newArticles);
  }

  getUsers() {
    return this.users;
    //return this.http.get( this.baseURL + "/users", {withCredentials: false, headers: this.headers});
  }
}

