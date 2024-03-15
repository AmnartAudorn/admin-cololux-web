import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SessionCookieUtil } from '../shared/utils/session-cookie.util';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public login = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  
  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) {}

  ngOnInit() {
    
  }

  public onLoginSubmit() {
    this._authService.authenticateUser(this.login.value).subscribe(
      (token) => {
        if (token) {
          this._sessionCookie.setAccessToken(token.token);
          this._router.navigate(['/dashboard']);
          this._authService.loggedIn(true);
        }
      },
      (err) => {
        
      }
    );
  }
}
