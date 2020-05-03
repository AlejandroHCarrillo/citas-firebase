// import { AuthHttp, AuthConfig } from "angular2-jwt";
// import { RequestOptions } from 'https';
import { HttpClient } from '@angular/common/http';

// export function authHttpServiceFactory(http: HttpClient, options: RequestOptions) {
  export function authHttpServiceFactory(http: HttpClient) {
  return true;
  // return new AuthHttp(new AuthConfig({
  //   tokenName: 'token',
  //         tokenGetter: (() => localStorage.getItem('token')),
  //         globalHeaders: [{'Content-Type':'application/json'}],
  //    }), http, options);
}