import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDashboard } from '../Interfaces/dashboard-Interface';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { SessionCookieUtil } from '../shared/utils/session-cookie.util';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient,public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService) { }

  getDashboardItems(): Observable<IDashboard[]> {
    return this._authService.getClick().pipe(
      map(items => {
        // คำนวณผลรวมของแต่ละค่าตามรายเดือน
        const monthlySums: any = {};
        items.forEach((item: { date: string | number | Date; sumHome: any; sumAbout: any; sumContact: any; sumRisk: any; sumFacebook: any; sumLine: any; sumWechat: any; }) => {
          const month = new Date(item.date).getMonth() + 1;
          if (!monthlySums[month]) {
            monthlySums[month] = {
              sumHome: 0,
              sumAbout: 0,
              sumContact: 0,
              sumRisk: 0,
              sumFacebook: 0,
              sumLine: 0,
              sumWechat: 0
            };
          }
          monthlySums[month].sumHome += item.sumHome;
          monthlySums[month].sumAbout += item.sumAbout;
          monthlySums[month].sumContact += item.sumContact;
          monthlySums[month].sumRisk += item.sumRisk;
          monthlySums[month].sumFacebook += item.sumFacebook;
          monthlySums[month].sumLine += item.sumLine;
          monthlySums[month].sumWechat += item.sumWechat;
        });

        // สร้างรายการของผลรวมแต่ละเดือน
        const monthlySumItems: IDashboard[] = [];
        for (const month in monthlySums) {
          if (monthlySums.hasOwnProperty(month)) {
            monthlySumItems.push({
              sumHome: monthlySums[month].sumHome,
              sumAbout: monthlySums[month].sumAbout,
              sumContact: monthlySums[month].sumContact,
              sumRisk: monthlySums[month].sumRisk,
              sumFacebook: monthlySums[month].sumFacebook,
              sumLine: monthlySums[month].sumLine,
              sumWechat: monthlySums[month].sumWechat,
              date: new Date(2024, Number(month) - 1, 1).toISOString() // กำหนดวันที่เป็นวันแรกของเดือน
            });
          }
        }
        return monthlySumItems;
      })
    );
  }
}