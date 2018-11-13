// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3010/',
  getCategories: 'categoryroutes/categories',
  updateCategory: 'categoryroutes/updateCategory',
  deleteCategory: 'categoryroutes/deleteCategory/',
  createCategory: 'categoryroutes/create/category',
  categoryImage: 'file/',
  fssource: '/fs',
  bannersource: '/banners',
  courseContent: '/courseContent',
  contactus: 'contactusroutes/user/contactus',
  getCourseById: 'courseroute/course/',
  addCourse: 'courseroute/course/addCourse',
  getAllCourses: 'courseroute/courses',
  getAllBanners: 'file/get/allfiles',
  getCourseContent: 'courseroute/courseContent/',
  getAllBatches: 'batch/get/batches',
  getBatchByCourse: 'batch/',
  addBatch : 'batch/add/batch',
  deleteBatch: 'batch/delete/batches/',
  deleteBanner : 'file/delete/',
  fileUpload: 'file/upload',
  getInquiries : 'contactusroutes/user/getcontacts',
  changeStatus: 'contactusroutes/user/change/status',
  constructUrl : function(input) {
    return this.apiUrl + input;
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
