import { Component, OnInit, Inject} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {GetAllCategoriesService} from './get-all-categories.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Categories} from '../models/categories';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private getAllCategoriesService: GetAllCategoriesService,
              public dialog: MatDialog) {
  }

  catSource =  [];
  displayColumns: String[] = ['category', 'createdDate', 'star'];
  categoryInput: string = null;

  // -- File uploader component--
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3010/categoryroutes/create/category',
    itemAlias: 'categoryImage'
  });


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('category', this.categoryInput);
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
      alert(response.errorCode);
    };

    this.getAllCats();
  }

  getAllCats(): void {
    this.getAllCategoriesService.getAllCategories().subscribe(categories => {
        console.log(categories);
        this.catSource = categories;
      }
    );
  }

  onSelect(item): void {
    console.log(item);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  onDelete(item): void {
    console.log(item);
  }

}

@Component({
  selector: 'app-dialog',
 template: '<h1 mat-dialog-title>Edit Category</h1>\n' +
   '<div mat-dialog-content>\n' +
   '  <mat-form-field>\n' +
   '    <input matInput [(ngModel)]="data.category">\n' +
   '  </mat-form-field>\n' +
   '</div>\n' +
   '<div mat-dialog-actions>\n' +
   '  <button mat-button (click)="onNoClick()">Cancel</button>\n' +
   '  <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Ok</button>\n' +
   '</div>'
})

export class DialogComponent {

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Categories) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
