import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import {AdminModule} from './adminroutes/admin.module';
import {AdminRoutingModule} from './adminroutes/admin-routing.module';
import { AdminnavComponent } from './adminnav/adminnav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    InquiriesComponent,
    AdminnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule,
    AdminRoutingModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
