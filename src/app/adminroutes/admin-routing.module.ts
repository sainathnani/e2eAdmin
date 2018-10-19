import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from '../category/category.component';
import {InquiriesComponent} from '../inquiries/inquiries.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'inquiries', component: InquiriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
