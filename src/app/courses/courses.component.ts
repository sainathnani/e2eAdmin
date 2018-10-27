import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm, Form} from '@angular/forms';
import {GetAllCategoriesService} from '../category/get-all-categories.service';
import {Categories} from '../models/categories';
import {FileUploader} from 'ng2-file-upload';
import {MatSnackBar} from '@angular/material';
import { ViewChild } from '@angular/core';
import {GetCoursesService} from './get-courses.service';
import {DialogComponent} from '../category/category.component';
import {BaseResponse} from '../models/BaseResponse';
import {CustomsnackComponent} from '../customsnack/customsnack.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private getAllCatService: GetAllCategoriesService,
              private snackBar: MatSnackBar,
              private getCourses: GetCoursesService) { }
  displayColumns: String[] = ['course', 'createdDate', 'star'];
  courseData: FormGroup;
  selected = new FormControl(0);
  allCategories: Categories[] = [];
  courseSource =  [];
  courseId: String;
  @ViewChild('addCourseForm') addCourseForm;

  // initialize file uploaded
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3010/courseroute/course/addCourse',
    itemAlias: 'courseImage'
  });

  // init
  ngOnInit() {
  this.initializeValiators();   // intialize object construction
  this.getAllCats();          // get all categories
  this.getAllCourses();       // get all courses
    // file upload logics

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };


    this.uploader.onBuildItemForm = (item, form) => {
      console.log(this.addCourseForm.value);
      form.append('courseData', JSON.stringify(this.addCourseForm.value));
      form.append('courseId', this.courseId);
    };
    this.uploader.onCompleteItem = (item: any, response: any) => {
      if (response === 'Success' || response === 'Updated Successfully') {
        this.snackBar.open(response, 'Done',  {
          duration: 2000
        });
        this.getAllCourses();
      }
      this.addCourseForm.reset();

    };
    // file upload logic ends
  }

  getAllCats(): void {
    this.getAllCatService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    });
  }

  initializeValiators(): void {
    this.courseData = new FormGroup({
      // -- first section--
      'courseName': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      'aboutCourse': new FormControl('', [
        Validators.maxLength(255)
      ]),
      'type': new FormControl('', [
        Validators.required
      ]),
      'file': new FormControl('', [
        Validators.required
      ]),
      // -- second section --
      'benefits': new FormGroup({
        'reason': new FormControl('', [
          Validators.maxLength(255),
        ]),
        'benefit1': new FormControl('', [
          Validators.maxLength(255),
        ]),
        'benefit2': new FormControl('', [
          Validators.maxLength(255),
        ]),
        'benefit3': new FormControl('', [
          Validators.maxLength(255),
        ])
      }),
      // -- third section --
      'reviews': new FormGroup({
        'total_reviews' : new FormControl(''),
        'score' : new FormControl(''),
        'rate': new FormControl('')
      }),
      // -- fourth section --
      'features': new FormGroup({
        'instructorLedSessions' : new FormControl('', [
          Validators.required
        ]),
        'realLifeCaseStudies': new FormControl(''),
        'assignments': new FormControl(''),
        'certification': new FormControl('', [
          Validators.required
        ])
      })
    });
  }

  getAllCourses(): void {
    this.getCourses.getAllCourses().subscribe(courses => {
      this.courseSource = courses;
    });
  }

  onEdit(item): void {
    this.selected.setValue(1);
    console.log(item);
    this.courseId = item._id;
    this.courseData.patchValue(item);
  }

  onDelete(item): void {
    this.getCourses.deleteCourse(item._id).subscribe( (res: BaseResponse) => {
      this.snackBar.openFromComponent(CustomsnackComponent, {
        data: res
      });

    });
    this.getAllCourses();
  }

}
