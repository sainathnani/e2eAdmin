import { Component, OnInit } from '@angular/core';
import {GetInquiriesService} from './get-inquiries.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

   columnsToDisplay: String[] =  ['name', 'email', 'mobile', 'message', 'status'];
   dataSource = [];
  constructor(private getInquiries: GetInquiriesService ) { }

  ngOnInit() {
    this.getAllInquires();
  }

  getAllInquires(): void {
    this.getInquiries.getInquiries().subscribe(inqueries => {
      this.dataSource = inqueries;
    });
  }
}
