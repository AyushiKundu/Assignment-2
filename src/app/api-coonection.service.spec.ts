import { TestBed } from '@angular/core/testing';

import { ApiCoonectionService } from './api-coonection.service';

describe('ApiCoonectionService', () => {
  let service: ApiCoonectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoonectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
