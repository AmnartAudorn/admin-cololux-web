import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  public contacts: any[] = [];
  public flieName = "contact.xlsx";

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    ) {
  }

  ngOnInit() {
    this.getContacts();
  }

  public getContacts(){
    this._authService.getContacts().subscribe((result) => {
      this.contacts = result;
      console.log(result);
    },
    (err) => {
      this._router.navigate(['/login']);
      throw err;
    });
  }

  public async downloadTemplateContact() {
    let data = document.getElementById("table-data-contact");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, 'Sheet1')
    XLSX.writeFile(wb,this.flieName);
  }
}
