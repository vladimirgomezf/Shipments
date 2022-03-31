import { TestBed } from '@angular/core/testing';

import { ShipmentsApiService } from './shipments-api.service';

describe('ShipmentsApiService', () => {
  let service: ShipmentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
