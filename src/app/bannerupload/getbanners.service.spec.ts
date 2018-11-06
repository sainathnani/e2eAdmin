import { TestBed, inject } from '@angular/core/testing';

import { GetbannersService } from './getbanners.service';

describe('GetbannersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetbannersService]
    });
  });

  it('should be created', inject([GetbannersService], (service: GetbannersService) => {
    expect(service).toBeTruthy();
  }));
});
