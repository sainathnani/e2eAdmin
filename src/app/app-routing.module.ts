import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/addcategory', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
