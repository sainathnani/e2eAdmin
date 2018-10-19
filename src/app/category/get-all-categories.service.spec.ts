import { TestBed, inject } from '@angular/core/testing';

import { GetAllCategoriesService } from './get-all-categories.service';

describe('GetAllCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllCategoriesService]
    });
  });

  it('should be created', inject([GetAllCategoriesService], (service: GetAllCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
