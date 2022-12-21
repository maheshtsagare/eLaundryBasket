import { TestBed } from '@angular/core/testing';

import { GetcustomersService } from './getcustomers.service';

describe('GetcustomersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetcustomersService = TestBed.get(GetcustomersService);
    expect(service).toBeTruthy();
  });
});
