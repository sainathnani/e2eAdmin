import { Component, OnInit } from '@angular/core';
import {Batches} from '../models/Batches';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GetCoursesService} from '../courses/get-courses.service';
import {Courses} from '../models/Courses';
import {BatchService} from './batch.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  constructor(private getCourses: GetCoursesService,
              private batchService: BatchService,
              private matSnack: MatSnackBar) { }

  displayColumns = ['courseName', 'startDate', 'duration', 'courseTime' , 'faculty' , 'star'];
  batchData: FormGroup;
  batSource: Batches[] = [];
  courses: Courses[] = [];
  courseObj = null;
  selectedCourse = null;
  activeTab = new FormControl(0);
  ngOnInit() {
    this.initializeBatchValidators();
    this.getAllCourse();
    this.getAllBatches();
  }

  initializeBatchValidators(): void {
    this.batchData = new FormGroup({
      // -- first section--
      'courseId': new FormControl('', [
        Validators.required,
      ]),
      '_id': new FormControl(),
      'duration': new FormControl('', [
        Validators.required,
      ]),
      'startDate': new FormControl('', [
        Validators.required
      ]),
      'courseTime': new FormControl('', [
        Validators.required
      ]),
      'faculty': new FormControl('', [
        Validators.required
      ])
  });
  }

  getAllCourse(): void {
    this.getCourses.getAllCourses().subscribe(res => {
      this.courses = res;
    });
  }

  getAllBatches(): void {
    this.batchService.getAllBatches().subscribe(res => {
      this.batSource = res;
    });
  }

  addBatch(form): void {
    console.log(form.value);
    this.courseObj = this.courses.find(course => {
      return form.value.courseId === course._id;
    });
   this.selectedCourse = this.courseObj.courseName;
    form.value.selectedCourse = this.selectedCourse;
    this.batchService.addBatch(form.value).subscribe(res => {
      if (res.errorDesc = 'Success') {
        this.matSnack.open(res.errorDesc, 'Done', {
          duration: 2000,
        });
        form.reset();
        this.getAllBatches();
        this.activeTab.setValue(0);
      } else {
        this.matSnack.open(res.errorDesc, 'Done', {
          duration: 2000,
        });
      }
    });

  }

  onEdit(item): void {
    console.log(item);
    this.activeTab.setValue(1);
    this.batchData.patchValue(item);
  }

  onDelete(item): void {
    console.log(item);
    this.batchService.deleteBatches(item._id).subscribe(res => {
      if (res.errorDesc = 'Success') {
        this.matSnack.open(res.errorDesc, 'Done', {
          duration: 2000,
        });
        this.getAllBatches();
      } else {
        this.matSnack.open(res.errorDesc, 'Done', {
          duration: 2000,
        });
      }
    });
  }

}
