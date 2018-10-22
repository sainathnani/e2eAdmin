import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {GetAllCategoriesService} from '../category/get-all-categories.service';
import {Categories} from '../models/categories';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private getAllCatService: GetAllCategoriesService) { }

  courseData: FormGroup;
  allCategories: Categories[] = [];
  ngOnInit() {
  this.initializeValiators();
  this.getAllCats();
  }

  getAllCats(): void {
    this.getAllCatService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    });
  }
  initializeValiators(): void {
    this.courseData = new FormGroup({
      // -- first section--
      course: new FormGroup({
        'coursename': new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        'about': new FormControl('', [
          Validators.maxLength(255)
        ]),
        'type': new FormControl('', [
          Validators.required
        ])
      }),
      // -- second section --
      'why': new FormGroup({
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
        'session' : new FormControl('', [
          Validators.required
        ]),
        'caseStudy': new FormControl(''),
        'assignments': new FormControl(''),
        'certification': new FormControl('', [
          Validators.required
        ])
      })
    });
  }

  addCourse(form: NgForm): void {
    console.log(form.value);
  }

}
