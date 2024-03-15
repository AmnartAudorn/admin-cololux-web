import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
} from 'ng-apexcharts';
import { IDashboard } from 'src/app/Interfaces/dashboard-Interface';
import { AuthService } from 'src/app/service/auth.service';
import { DashboardService } from 'src/app/service/dashboard.service';
export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  plotOptions: ApexPlotOptions | any;
};

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html',
})
export class SalesRatioComponent implements OnInit {
  public sumDashboard: IDashboard[] = [];
  // Initialize sum lists

  sumHomeList: number[] = [];
  sumRiskList: number[] = [];
  sumAboutList: number[] = [];
  sumContactList: number[] = [];
  sumFacebookList: number[] = [];
  sumLineList: number[] = [];
  sumWechatList: number[] = [];

  constructor(
    public authService: AuthService,
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.getClick();
  }

  @ViewChild('chart') chart!: ChartComponent;
  public salesChartOptions!: Partial<salesChartOptions>;

  getClick() {
    this.dashboardService.getDashboardItems().subscribe((items) => {
      this.sumDashboard = items;
      this.sumDashboard.forEach((data) => {
        this.sumHomeList.push(data.sumHome);
        this.sumRiskList.push(data.sumRisk);
        this.sumAboutList.push(data.sumAbout);
        this.sumContactList.push(data.sumContact);
        this.sumFacebookList.push(data.sumFacebook);
        this.sumLineList.push(data.sumLine);
        this.sumWechatList.push(data.sumWechat);
      });

      this.salesChartOptions = {
        series: [
          { name: 'Home', data: this.sumHomeList },
          { name: 'RiskAssessment', data: this.sumRiskList },
          { name: 'ContactUs', data: this.sumContactList },
          { name: 'AboutUs', data: this.sumAboutList },
          { name: 'Facebook', data: this.sumFacebookList },
          { name: 'Line', data: this.sumLineList },
          { name: 'Wechat', data: this.sumWechatList },
        ],
        chart: {
          fontFamily: 'Rubik,sans-serif',
          height: 390,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: [
          '#00FFFF',
          '#008080',
          '#0000FF',
          '#000080',
          '#FF00FF',
          '#800080',
          '#008000',
        ],
        stroke: {
          curve: 'smooth',
          width: 1,
        },
        grid: {
          strokeDashArray: 3,
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
        tooltip: {
          theme: 'dark',
        },
      };
      console.log('sumHomeList : ' + this.sumAboutList);
    });
  }
}
