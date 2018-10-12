import { TestBed, inject } from '@angular/core/testing';

import { GetInquiriesService } from './get-inquiries.service';

describe('GetInquiriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetInquiriesService]
    });
  });

  it('should be created', inject([GetInquiriesService], (service: GetInquiriesService) => {
    expect(service).toBeTruthy();
  }));
});
