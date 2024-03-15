import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
})
export class RiskAssessmentComponent {
  public riskAssessment: any[] = [];
  public flieName = 'riskAssessments.xlsx';

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    this.getRiskAssessment();
  }

  public getRiskAssessment() {
    this._authService.getRiskAssessment().subscribe(
      (result) => {
        this.riskAssessment = result;
        console.log(result);
      },
      (err) => {
        this._router.navigate(['/login']);
        throw err;
      }
    );
  }

  public async downloadTemplateRisk() {
    let data = document.getElementById('table-data');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.flieName);
  }
}
