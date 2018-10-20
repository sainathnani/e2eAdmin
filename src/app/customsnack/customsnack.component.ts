import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-customsnack',
  templateUrl: './customsnack.component.html',
  styleUrls: ['./customsnack.component.css']
})
export class CustomsnackComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }


}
