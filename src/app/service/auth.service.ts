import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  public token: string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTQ3OTk0Mzg4OTQ5NiwiZXhwIjoxNDgwNTQ4Njg5fQ.yEc0bN51kfEFYOZi1SU8H0-g7PYLZ0wcCwhCnH_D6AVEIRUBrRcy-vQIceIL1Gmu0kHO430yv0a-WBY3jX3bbA";
  headers: Headers = new Headers();
  private apiURL: string = "http://localhost:8080";
  error: string;

  constructor(private http: Http, private localStorage: LocalStorageService, private router: Router) {
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Access-Control-Allow-Origin', '*');
    // var currentUser = JSON.parse((localStorage.get('currentUser')!=null)? localStorage.get('currentUser'): null);
    // this.token = currentUser && currentUser.token;
  }
    // this.headers.append("Authorization","eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTQ3OTk0Mzg4OTQ5NiwiZXhwIjoxNDgwNTQ4Njg5fQ.yEc0bN51kfEFYOZi1SU8H0-g7PYLZ0wcCwhCnH_D6AVEIRUBrRcy-vQIceIL1Gmu0kHO430yv0a-WBY3jX3bbA")


  logIn(user){
  // logIn(username: string, password: string){
    // return this.http.post(this.apiURL+'/auth', JSON.stringify({ username: username, password: password }))
    //   .map((response: Response) => {
    //     // login successful if there's a jwt token in the response
    //     let token = response.json() && response.json().token;
    //     if (token) {
    //       // set token property
    //       this.token = token;
    //
    //       // store username and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
    //
    //       // return true to indicate successful login
    //       return true;
    //     } else {
    //       // return false to indicate failed login
    //       return false;
    //     }
    //   })subscribe(result => {
  //   if (result === true) {
  //     this.router.navigate(['/']);
  //   } else {
  //     this.error = 'Username or password is incorrect';
  //     this.loading = false;
  //   }
  // });
    // http.get(this.baseURL + "/auth", this.headers).subscribe(
    //   (data: any) => console.log(data)
    // );
    //  http.post(this.baseURL + "/auth", JSON.stringify(user), this.headers).subscribe(
    //    (data:Response) =>   data.json()
    //  ).catch(
    //    error => console.log(error)
    //  );
    //
    localStorage.setItem("currentUser", user);
    this.router.navigate(['/']);
  }

  logOut() {
    localStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }

  isLogged() {

    if(localStorage.getItem("currentUser") == null) {
      return false;
    }
    return true;
  }
}
