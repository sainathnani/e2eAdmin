import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from '../category/category.component';
import {InquiriesComponent} from '../inquiries/inquiries.component';
import {CoursesComponent} from '../courses/courses.component';
import {BatchesComponent} from '../batches/batches.component';
import {BanneruploadComponent} from '../bannerupload/bannerupload.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'inquiries', component: InquiriesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'batches', component: BatchesComponent },
  { path: 'banners', component: BanneruploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
