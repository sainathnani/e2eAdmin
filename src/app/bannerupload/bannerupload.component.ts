import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {MatSnackBar} from '@angular/material';
import {GetbannersService} from './getbanners.service';
import {BannerDetails} from '../models/BannerDetails';

@Component({
  selector: 'app-bannerupload',
  templateUrl: './bannerupload.component.html',
  styleUrls: ['./bannerupload.component.css']
})
export class BanneruploadComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
              private getBanners: GetbannersService) { }

  banSource: BannerDetails[] = [];
  displayColumns: String[] = ['bannerImg', 'filename', 'star'];
  public bannerUpload: FileUploader = new FileUploader({
    url: 'http://localhost:3010/file/upload',
    itemAlias: 'courseContent'
  });

  ngOnInit() {

    this.bannerUpload.onAfterAddingFile = (file) => { file.withCredentials = false; };


    this.bannerUpload.onBuildItemForm = (item, form) => {
      form.append('source', 'banner');
      form.append('bucketName', 'banners');
    };
    this.bannerUpload.onCompleteItem = (item: any, response: any) => {
      if (response === 'Success' || response === 'Updated Successfully') {
        this.snackBar.open(response, 'Done',  {
          duration: 2000
        });
      }

    };
    this.getAllBanners();
  }


  onDelete(element): void {
    console.log(element);
    this.getBanners.deleteBanner(element.fileId, 'banners').subscribe(res => {
      if (res.status === 'Success') {
        this.snackBar.open(res.status, 'Done', {
          duration: 2000
        });
        this.getAllBanners();
      }
    });
  }

  getAllBanners(): void {
    this.getBanners.getAllBanners().subscribe(res => this.banSource = res);
  }


}
