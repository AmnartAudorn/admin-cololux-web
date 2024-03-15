import { Component, AfterViewInit } from '@angular/core';
import { SessionCookieUtil } from '../shared/utils/session-cookie.util';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor( public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngOnInit(){
    this.checkCookie();
  }

  ngAfterViewInit() { }
  
  public checkCookie(){
    const token = this._sessionCookie.getAccessToken();
    console.log(token)
    if(!token){
      this._router.navigate(['/login']);
    }
  }
}
