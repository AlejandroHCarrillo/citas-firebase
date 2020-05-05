import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    public _cs:ChatService, 
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ingresar(proveedor:string){
    this._cs.login(proveedor);
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else  
          this.invalidLogin = true; 
      });
  }
}
