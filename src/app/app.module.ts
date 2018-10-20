import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatTabsModule, MatButtonModule , MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatIconModule, MatMenuModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import {AdminModule} from './adminroutes/admin.module';
import {AdminRoutingModule} from './adminroutes/admin-routing.module';
import { AdminnavComponent } from './adminnav/adminnav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent, DialogComponent } from './category/category.component';
import { FileSelectDirective } from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import { CustomsnackComponent } from './customsnack/customsnack.component';
@NgModule({
  declarations: [
    AppComponent,
    InquiriesComponent,
    AdminnavComponent,
    CategoryComponent,
    DialogComponent,
    FileSelectDirective,
    CustomsnackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AdminModule,
    AdminRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [ DialogComponent, CustomsnackComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
