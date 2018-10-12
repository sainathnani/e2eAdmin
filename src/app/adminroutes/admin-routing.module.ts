import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCategoryComponent} from '../add-category/add-category.component';
import {InquiriesComponent} from '../inquiries/inquiries.component';

const routes: Routes = [
  { path: 'addcategory', component: AddCategoryComponent },
  { path: 'inquiries', component: InquiriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
