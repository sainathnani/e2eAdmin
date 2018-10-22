import { Component, OnInit } from '@angular/core';
import {GetInquiriesService} from './get-inquiries.service';
import {MatSnackBar} from '@angular/material';
import {CustomsnackComponent} from '../customsnack/customsnack.component';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

   columnsToDisplay: String[] =  ['name', 'email', 'mobile', 'message', 'status', 'star'];
   dataSource = [];
  constructor(private getInquiries: GetInquiriesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllInquires();
  }

  getAllInquires(): void {
    this.getInquiries.getInquiries().subscribe(inqueries => {
      this.dataSource = inqueries;
    });
  }

  changeStatus(element): void {
    this.getInquiries.changeStatus(element).subscribe(res => {
      if (res.status === 'Success') {
        this.snackBar.openFromComponent(CustomsnackComponent, {
          data: res,
          duration: 1000
        });
        this.getAllInquires();
      }
    });
  }
}
