// import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
          .pipe(
                map((response : { token : string}) => {
                  let result = response;
                  if(result && result.token){
                    localStorage.setItem('token', result.token);
                    return true;
                  }
                  return false;
                })
          );
  }

  logout() { 
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
    }
  }

  isLoggedIn() {
    return true;
    // return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    // return new JwtHelper().decodeToken(token);
    return { name : "Alejandro",
             admin: true
            }
  }
}

