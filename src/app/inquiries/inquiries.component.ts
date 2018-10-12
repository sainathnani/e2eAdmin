import { Component, OnInit, ViewChild } from '@angular/core';
import {Inqueries} from '../models/inqueries';
import { MatTable } from '@angular/material';
import {GetInquiriesService} from './get-inquiries.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

   columnsToDisplay: String[] =  ['name', 'email', 'mobile', 'message', 'status'];
   dataSource = [];
  @ViewChild(MatTable) table: MatTable<Inqueries>;
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
