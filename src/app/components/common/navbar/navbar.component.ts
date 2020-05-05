import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public _cs: ChatService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this._cs.logout();
    this.router.navigate(['/home']);
  }

}
