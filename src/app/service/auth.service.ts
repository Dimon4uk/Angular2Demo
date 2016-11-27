import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from "@angular/router";


@Injectable()
export class AuthService {
  token: string;
  userKey: string = "token";
  tokenKey: string = "authUser";
  headers: Headers = new Headers();
  private apiURL: string = "http://localhost:8080";
  currentUser = null;

  constructor(private http: Http, private storage: LocalStorageService, private router: Router) { }

  logIn(user){
    this.headers.append('Content-Type', 'application/json;charset=UTF-8');
     this.http.post(this.apiURL +'/auth', JSON.stringify(user), {headers: this.headers})
      .subscribe((response: Response) => {

        let token = response.json() && response.json().token;
        if (token) {
          this.token = response.json().token;
          this.setCurrentUser();

          if(this.currentUser  != null) {
            this.storage.set(this.tokenKey, this.token)
            this.router.navigate(['/']);
          }
        } else {
          this.router.navigate(['/login']);
        }
      });
  }

  setCurrentUser() {
    if(this.currentUser == null) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json;charset=UTF-8');
      this.headers.append('Authorization', this.token);

      this.http.get(this.apiURL + "/user", { headers: this.headers}).subscribe((response: Response) => {
        if(response.status == 200) {
          this.currentUser = response.json();
          this.storage.set(this.userKey, this.currentUser);
        }
      })
    }
  }

  logOut() {
    this.currentUser = null;
    this.storage.remove(this.tokenKey);
    this.storage.remove(this.userKey);
    this.router.navigate(['/login']);
  }


  isLogged() {

    if(this.storage.get(this.userKey) != null) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if(this.currentUser == null) {
      return false;
    } else {
      for(let authority of this.currentUser.authorities) {

        if(authority.authority == "ROLE_ADMIN") {
          return true;
        }
      }

      // if(u.this.storage.get(this.userKey) )
    }
    return false;

  }
}
