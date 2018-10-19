import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/category', pathMatch: 'full' },
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
