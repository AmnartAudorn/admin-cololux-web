import { Component, OnInit } from '@angular/core';
import { topcard, topcards } from './top-cards-data';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';
import { IDashboard } from 'src/app/Interfaces/dashboard-Interface';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
})
export class TopCardsComponent implements OnInit {
  public sumDashboard: IDashboard[] = [];
  public title: any;
  public subtitle: any;
  public sumHome = 0;
  public sumAbout = 0;
  public sumContact = 0;
  public sumFacebook = 0;
  public sumLine = 0;
  public sumRisk = 0;
  public sumWechat = 0;

  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getClick();
  }

  getClick() {
    this._authService.getClick().subscribe(
      (result) => {
        this.sumDashboard = result;

        this.sumDashboard.forEach((data) => {
          this.sumHome += data.sumHome;
          this.sumAbout += data.sumAbout;
          this.sumContact += data.sumContact;
          this.sumFacebook += data.sumFacebook;
          this.sumLine += data.sumLine;
          this.sumRisk += data.sumRisk;
          this.sumWechat += data.sumWechat;
        });
      },
      (err) => {
        this._router.navigate(['/login']);
        throw err;
      }
    );
  }
}
